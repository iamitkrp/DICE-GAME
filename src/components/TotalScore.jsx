import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 240px;
  text-align: center;
  padding: 20px 24px;
  background: var(--card-bg);
  border: 1px solid #eef2ff;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.06);

  h1 {
    font-size: clamp(56px, 18vw, 92px);
    line-height: 1;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    color: var(--muted);
  }
`;
