import styled from "styled-components";

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 1rem;
  text-align: center;
`;

const EmptyIllustration = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.accent};
  opacity: 0.7;
`;

const EmptyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.title};
`;

const EmptyText = styled.p`
  color: ${(props) => props.theme.text};
  max-width: 400px;
  margin: 0 auto;
  font-size: 1rem;
`;

const EmptyState = () => {
  return (
    <EmptyContainer>
      <EmptyTitle>No tasks yet</EmptyTitle>
      <EmptyText>Add your first task using the form above.</EmptyText>
    </EmptyContainer>
  );
};

export default EmptyState;
