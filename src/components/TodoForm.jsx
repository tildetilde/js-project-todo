"use client";

import { useState } from "react";
import styled from "styled-components";
import { useStore } from "../store";

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

const Select = styled.select`
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

const TodoForm = () => {
  const { addTask, completeAllTasks, categories } = useStore();
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");

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
          placeholder="Write a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="Task description"
        />

        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Task category"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
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
