import styled from "styled-components";
import { useStore } from "../store";
import TodoItem from "./TodoItem";

const ListContainer = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.title};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TodoList = () => {
  const { tasks, categories } = useStore();

  // Group tasks by category
  const tasksByCategory = categories.reduce((acc, category) => {
    const categoryTasks = tasks.filter((task) => task.category === category);
    if (categoryTasks.length > 0) {
      acc[category] = categoryTasks;
    }
    return acc;
  }, {});

  // Handle tasks without a category
  const uncategorizedTasks = tasks.filter(
    (task) => !categories.includes(task.category)
  );
  if (uncategorizedTasks.length > 0) {
    tasksByCategory["Other"] = uncategorizedTasks;
  }

  return (
    <ListContainer>
      {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          {categoryTasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </CategorySection>
      ))}
    </ListContainer>
  );
};

export default TodoList;
