import React, { useEffect, useState } from "react";

import styled from "styled-components";

const ProgressBar = ({ endTime }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer >= 10000) {
      endTime();
    }

    setTimeout(() => {
      setTimer((lastState) => lastState + 10);
    }, 10);
  }, [timer, endTime]);

  const percentage = (100 * timer) / 10000;

  return (
    <Container>
      <InnerContainer style={{ width: percentage + "%" }}>
        {Math.floor(timer / 1000) + "s"}
      </InnerContainer>
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
  margin-bottom: 1rem;
`;

const InnerContainer = styled.div`
  background-color: #be5a5a;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
