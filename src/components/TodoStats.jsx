import styled from "styled-components";
import { useStore } from "../store";

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: ${(props) => props.theme.text};
  border-top: 1px solid ${(props) => props.theme.border};
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatValue = styled.span`
  font-weight: 500;
  color: ${(props) => props.theme.accent};
`;

const TodoStats = () => {
  const { getUncompletedCount, getCompletedCount, getTotalCount } = useStore();

  return (
    <StatsContainer>
      <StatItem>
        <span>Tasks:</span>
        <StatValue>{getTotalCount()}</StatValue>
      </StatItem>
      <StatItem>
        <span>Completed:</span>
        <StatValue>{getCompletedCount()}</StatValue>
      </StatItem>
      <StatItem>
        <span>Uncompleted:</span>
        <StatValue>{getUncompletedCount()}</StatValue>
      </StatItem>
    </StatsContainer>
  );
};

export default TodoStats;
