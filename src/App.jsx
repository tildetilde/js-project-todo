"use client";

import { useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useStore } from "./store";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import EmptyState from "./components/EmptyState";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Libre+Baskerville:ital@0;1&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }

  button, input, select {
    font-family: 'Inter', sans-serif;
  }
`;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const NotebookContainer = styled.div`
  background-color: ${(props) => props.theme.paper};
  padding: 0;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  color: ${(props) => props.theme.title};
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

function App() {
  const { tasks, darkMode, toggleDarkMode, loadTasks } = useStore();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <div>
          <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
            This place to record information about daily events, emotions
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title>LISTAT</Title>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>

        <NotebookContainer>
          <TodoForm />
          <TodoStats />
          {tasks.length > 0 ? <TodoList /> : <EmptyState />}
        </NotebookContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
