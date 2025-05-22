"use client";

import styled from "styled-components";

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.7;
  }

    @media (max-width: 350px) {
    font-size: 0.75rem;
  }
`;

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <ToggleButton
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "Light" : "Dark"}
    </ToggleButton>
  );
};

export default ThemeToggle;
