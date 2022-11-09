import React from "react";

import styled from "styled-components";

const FullButton = (props) => {
  return <FullWidthButton {...props}>{props.children}</FullWidthButton>;
};

export default FullButton;

const FullWidthButton = styled.button`
  border: none;
  background-color: #6bbc7c;
  color: white;
  font-weight: bold;
  width: 100%;
`;
