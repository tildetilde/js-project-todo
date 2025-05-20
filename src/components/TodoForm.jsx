"use client";

import { useState } from "react";
import styled from "styled-components";
import { useStore } from "../store";
import Select from "react-select";

const FormContainer = styled.form`
  margin: 2rem 0 3rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 0;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.border};
  background-color: transparent;
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.accent};
  }

  &::placeholder {
    color: ${(props) => props.theme.completed};
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.accent};
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.paper};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CompleteAllButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.accent};

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.paper};
  }
`;

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #000",
    borderRadius: 0,
    boxShadow: "none",
    fontSize: "1rem",
    color: "#000",
    fontFamily: "Zen Kaku Gothic New, sans-serif",
    padding: "0.5rem 0",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#f5f5f3",
    border: "1px solid #000",
    borderRadius: 0,
    boxShadow: "none",
    fontFamily: "Zen Kaku Gothic New, sans-serif",
  }),
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected
      ? "#000"
      : isFocused
      ? "#dcdcdc"
      : "transparent",
    color: isSelected ? "#fff" : "#000",
    cursor: "pointer",
    fontWeight: isSelected ? "600" : "400",
    padding: "0.5rem 1rem",
    ":active": {
      backgroundColor: "#000",
      color: "#fff",
    },
    ":focus": {
      backgroundColor: "#000",
      color: "#fff",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#000",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#999",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const TodoForm = () => {
  const { addTask, completeAllTasks, categories } = useStore();
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");

  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text.trim(), category, dueDate || null);
      setText("");
      setDueDate("");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputRow>
        <Input
          type="text"
          placeholder="Put in a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Task description"
        />

        <div style={{ flex: 1 }}>
          <Select
            options={categoryOptions}
            value={{ value: category, label: category }}
            onChange={(selected) => setCategory(selected.value)}
            styles={customStyles}
            aria-label="Task category"
          />
        </div>
      </InputRow>

      <InputRow>
        <Input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="Due date"
        />

        <Button type="submit" disabled={!text.trim()}>
          Add Task
        </Button>

        <CompleteAllButton type="button" onClick={completeAllTasks}>
          Complete All
        </CompleteAllButton>
      </InputRow>
    </FormContainer>
  );
};

export default TodoForm;
