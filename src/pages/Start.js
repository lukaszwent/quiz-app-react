import React from "react";

import styled from "styled-components";
import Button from "../components/UI/Button";
import useInput from "../hooks/useInput";

import { userActions } from "../store/user-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    value: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    inputValueChangeHandler: usernameInputValueChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameInputResetHandler,
  } = useInput((value) => {
    return value.length > 1;
  });

  const onButtonClickHandler = () => {
    if (!usernameIsValid) return;

    dispatch(userActions.addUsername(usernameValue));

    navigate("/categories");

    usernameInputResetHandler();
  };

  return (
    <>
      <WelcomeText>Welcome to Quizz</WelcomeText>
      <FormInputs>
        <InputBox>
          <TextInput
            type="text"
            value={usernameValue}
            onChange={usernameInputValueChangeHandler}
            onBlur={usernameBlurHandler}
            placeholder="Enter your username..."
            required
          />
          {usernameHasError ? (
            <ErrorMessage>
              Username should be longer than 1 character
            </ErrorMessage>
          ) : null}
        </InputBox>
        <Button onClick={onButtonClickHandler}>Start</Button>
      </FormInputs>
    </>
  );
};

export default Start;

const WelcomeText = styled.p`
  text-align: center;
  color: white;
  font-size: 2rem;
`;

const TextInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  border: none;
  border-radius: 15px;
`;

const InputBox = styled.div`
  margin: 2rem 0;
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: #be5a5a;
  font-weight: bold;
`;
