import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Button from "../components/UI/Button";

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <AnswersBox>
        <Box style={{ backgroundColor: "#6bbc7c" }}>
          {state.answers.correct}
        </Box>
        <Box style={{ backgroundColor: "#be5a5a" }}>{state.answers.wrong}</Box>
      </AnswersBox>

      <Button onClick={() => navigate("/categories")}>Back to menu</Button>
    </Container>
  );
};

export default Results;

const Box = styled.div`
  background-color: gray;
  border-radius: 15px;
  padding: 1rem;
  height: 200px;
  width: 200px;
  margin: 0.1rem;
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswersBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
