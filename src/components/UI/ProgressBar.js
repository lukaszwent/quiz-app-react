import React from "react";

import styled from "styled-components";

const ProgressBar = () => {
  return (
    <Container>
      <InnerContainer></InnerContainer>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #888888;
  border: 4px solid #353535;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  background-color: #be5a5a;
`;
