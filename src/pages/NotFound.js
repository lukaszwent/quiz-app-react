import React from "react";

import styled from "styled-components";

const NotFound = () => {
  return (
    <div>
      <ErrorMessage>Page not found</ErrorMessage>
    </div>
  );
};

export default NotFound;

const ErrorMessage = styled.p`
  color: #be5a5a;
  font-weight: bold;
`;
