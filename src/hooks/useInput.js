import { useReducer } from "react";

const defaultInput = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "CHANGE")
    return {
      value: action.value,
      isTouched: state.isTouched,
    };

  if (action.type === "BLUR")
    return {
      value: state.value,
      isTouched: true,
    };

  if (action.type === "RESET")
    return {
      value: "",
      isTouched: false,
    };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, defaultInput);

  const isInputValid = validateValue(inputState.value);
  const hasError = !isInputValid && inputState.isTouched;

  const inputValueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const inputResetHandler = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: isInputValid,
    hasError: hasError,
    inputValueChangeHandler,
    inputBlurHandler,
    inputResetHandler,
  };
};

export default useInput;
