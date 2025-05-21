"use client";

import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, NotebookContainer, Header, Title } from "./LayoutStyles";
import { useStore } from "./store";
import GlobalStyle from "./GlobalStyle";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoStats from "./components/TodoStats";
import EmptyState from "./components/EmptyState";
import AboutPage from "./components/AboutPage";
import ThemeToggle from "./components/ThemeToggle";
import { lightTheme, darkTheme } from "./theme";

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
          <p
            style={{
              fontSize: "0.9rem",
              marginBottom: "1rem",
              padding: "0 2rem",
              fontStyle: "italic",
              fontFamily: '"Zen Kaku Gothic New", sans-serif',
            }}
          >
            List it. Do it. Leave it.
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
        {/* <AboutPage /> */}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
