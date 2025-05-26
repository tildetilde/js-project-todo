import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const NotebookContainer = styled.div`
  background-color: ${(props) => props.theme.paper};
  padding: 1rem 2rem;
  position: relative;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 8rem;
  padding: 0 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.title};
  letter-spacing: -2px;
  word-break: break-word;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }

  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;
