import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on the dice image</p>
        <p>
          If your selected number equals the dice result, you earn that many points
        </p>
        <p>If your guess is wrong, 2 points are deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbfaff;
  border: 1px solid #eef2ff;
  padding: 24px;
  margin-top: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(2, 6, 23, 0.06);

  h2 {
    font-size: 22px;
  }
  .text {
    margin-top: 14px;
  }
  .text p {
    position: relative;
    padding-left: 18px;
    margin: 8px 0;
  }
  .text p::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
  }
`;
