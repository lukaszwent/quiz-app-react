import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import ProgressBar from "../components/UI/ProgressBar";
import useHttp from "../hooks/useHttp";

import { CATEGORIES_LIST } from "../consts/categories";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const InQuiz = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({ correct: 0, wrong: 0 });
  const { isLoading, error, sendRequest: fetchQuestions } = useHttp(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showOverlay, setShowOverlay] = useState({ status: false, type: "" });

  useEffect(() => {
    const setData = (data) => {
      const fetchedQuestions = data.results.map((el) => {
        const answers = [];

        answers.push(el.correct_answer);

        el.incorrect_answers.forEach((answer) => {
          answers.push(answer);
        });

        return {
          question: el.question,
          answers: shuffle(answers),
          correct: el.correct_answer,
        };
      });

      setQuestions(fetchedQuestions);
    };

    const isRealCategory = CATEGORIES_LIST.some((el) => {
      return el.id === parseInt(params.id);
    });

    if (!isRealCategory) {
      navigate("/categories", { replace: true });
    }

    fetchQuestions(
      { url: `https://opentdb.com/api.php?amount=10&category=${params.id}` },
      setData
    );
  }, [fetchQuestions, params.id, navigate]);

  useEffect(() => {
    if (questionNumber >= 10 && !showOverlay.status) {
      navigate("/results", { state: { answers: answers } });
    }
  }, [questionNumber, answers, navigate, showOverlay.status]);

  const handleAnswer = (answer) => {
    if (answer === questions[questionNumber].correct) {
      setShowOverlay({ status: true, type: "CORRECT" });
      setAnswers((lastState) => ({
        ...lastState,
        correct: lastState.correct + 1,
      }));
    } else {
      setShowOverlay({ status: true, type: "WRONG" });
      setAnswers((lastState) => ({ ...lastState, wrong: lastState.wrong + 1 }));
    }

    setTimeout(() => {
      setShowOverlay({ status: false, type: "" });
    }, 1000);

    setQuestionNumber((lastState) => {
      return lastState + 1;
    });
  };

  const endTime = () => {
    setShowOverlay({ status: true, type: "WRONG" });
    setTimeout(() => {
      setShowOverlay({ status: false, type: "" });
    }, 1000);
    setQuestionNumber((lastState) => {
      return lastState + 1;
    });
    setAnswers((lastState) => ({ ...lastState, wrong: lastState.wrong + 1 }));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage>Some error occurred</ErrorMessage>;
  }

  return (
    <MainContainer>
      {showOverlay.status ? (
        <Overlay
          style={{
            backgroundColor:
              showOverlay.type === "CORRECT" ? "#6bbc7c" : "#be5a5a",
          }}
        >
          {showOverlay.type}
        </Overlay>
      ) : null}
      <ProgressBar endTime={endTime} status={showOverlay.status} />
      <Container>
        <QuestionBox
          dangerouslySetInnerHTML={{
            __html: questions[questionNumber]?.question,
          }}
        ></QuestionBox>
        <AnswersBox>
          {questions[questionNumber]?.answers.map((q) => {
            return (
              <Answer
                key={q}
                onClick={handleAnswer.bind(this, q)}
                dangerouslySetInnerHTML={{
                  __html: q,
                }}
              ></Answer>
            );
          })}
        </AnswersBox>
      </Container>
    </MainContainer>
  );
};

export default InQuiz;

const ErrorMessage = styled.p`
  color: #be5a5a;
  font-weight: bold;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: white;
  position:absolute:
  top:0;
  left:0;
  width:100%;
  height: 100%;
`;

const MainContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  padding: 2rem;
`;

const QuestionBox = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const AnswersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Answer = styled.div`
  background-color: gray;
  border-radius: 15px;
  padding: 1rem;
  height: 200px;
  width: 200px;
  margin: 0.1rem;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #6bbc7c;
    transition: 0.25s;
  }
`;
