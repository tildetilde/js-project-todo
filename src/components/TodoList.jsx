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
    const categoryTasks = tasks
      .filter((task) => task.category === category)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // nyast först
    if (categoryTasks.length > 0) {
      acc[category] = categoryTasks;
    }
    return acc;
  }, {});

  return (
    <>
      {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {categoryTasks.map((task) => (
              <TodoItem key={task.id} task={task} />
            ))}
          </ul>
        </CategorySection>
      ))}
    </>
  );
};

export default TodoList;
