import React from "react";

import styled from "styled-components";

const Button = (props) => {
  return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
};

export default Button;

const PrimaryButton = styled.button`
  border: none;
  background-color: #6bbc7c;
  color: white;
  font-weight: bold;
  width: fit-content;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 1rem 3rem;

  &:hover {
    background-color: gray;
    color: black;
    transition: 0.25s;
  }
`;
