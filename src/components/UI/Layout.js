import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <BrandBlock>Quizz</BrandBlock>
      <Box>{children}</Box>
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

const Box = styled.main`
  background-color: #353535;
  border-radius: 15px;
  box-shadow: 0px 8px 8px 5px rgba(0, 0, 0, 0.25);
  width: 30%;
  height: 75%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media (max-width: 1650px) {
    width: 50%;
  }

  @media (max-width: 1000px) {
    width: 99%;
  }
`;

const BrandBlock = styled.header`
  padding: 3rem;
  font-weight: 500;
  font-size: 2.5rem;
  color: #6bbc7c;
`;
