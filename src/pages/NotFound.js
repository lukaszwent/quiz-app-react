import React from "react";

import styled from "styled-components";

const NotFound = () => {
  return (
    <ErrorBox>
      <ErrorMessage>Page not found</ErrorMessage>
    </ErrorBox>
  );
};

export default NotFound;

const ErrorMessage = styled.p`
  color: #be5a5a;
  font-weight: bold;
  font-size: 2rem;
`;

const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
