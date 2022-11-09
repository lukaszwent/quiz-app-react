import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const Layout = ({ children }) => {
  return (
    <Container>
      <BrandBlock>Quizz</BrandBlock>
      <Box>
        <ProgressBar />
        <MainContent>{children}</MainContent>
      </Box>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: #292929;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: #353535;
  border-radius: 15px;
  box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.25);
  min-width: 30%;
  height: 70%;
  overflow: auto;
`;

const MainContent = styled.main`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const BrandBlock = styled.header`
  padding: 4rem;
  font-weight: 500;
  font-size: 2.5rem;
  color: #6bbc7c;
`;
