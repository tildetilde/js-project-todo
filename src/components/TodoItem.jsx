"use client";

import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { useStore } from "../store";
import { format } from "date-fns";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.border};
  animation: ${fadeIn} 0.3s ease;
  position: relative;
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${(props) => props.theme.accent};
  margin-right: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${(props) =>
    props.checked &&
    css`
      background-color: ${(props) => props.theme.accent};

      &::after {
        content: "✓";
        color: ${(props) => props.theme.paper};
        font-size: 12px;
      }
    `}
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const TaskText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  position: relative;

  ${(props) =>
    props.$completed &&
    css`
      color: ${(props) => props.theme.completed};
      text-decoration: line-through;
    `}
`;

const TaskMeta = styled.div`
  display: flex;
  font-size: 0.85rem;
  color: ${(props) => props.theme.completed};
  flex-wrap: wrap;
  gap: 12px;
`;

const TaskDate = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.categoryText};
`;

const TaskDueDate = styled.span`
  display: inline-block;
  color: ${(props) =>
    props.$overdue ? props.theme.categoryText : props.theme.completed};
  font-weight: ${(props) => (props.$overdue ? "bold" : "normal")};
`;

const TaskCategory = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.categoryText};
  font-size: 0.8rem;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.completed};
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.6;
  transition: opacity 0.2s;
  margin-left: 8px;

  &:hover {
    opacity: 1;
  }
`;

const TodoItem = ({ task }) => {
  const { toggleTask, removeTask, getFormattedDate, isTaskOverdue } =
    useStore();
  const [showDelete, setShowDelete] = useState(false);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const overdue = task.dueDate && isTaskOverdue(task);

  return (
    <ItemContainer
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      <Checkbox checked={task.completed} onClick={handleToggle} />

      <ContentContainer>
        <TaskText $completed={task.completed}>{task.text}</TaskText>

        <TaskMeta>
          <TaskDate>Created: {getFormattedDate(task.createdAt)}</TaskDate>

          {task.dueDate && (
            <TaskDueDate $overdue={overdue}>
              Due: {format(new Date(task.dueDate), "MMM d, yyyy")}
              {overdue && " (overdue)"}
            </TaskDueDate>
          )}

          <TaskCategory>{task.category}</TaskCategory>
        </TaskMeta>
      </ContentContainer>

      {showDelete && (
        <DeleteButton
          onClick={() => removeTask(task.id)}
          aria-label="Delete task"
        >
          ×
        </DeleteButton>
      )}
    </ItemContainer>
  );
};

export default TodoItem;
