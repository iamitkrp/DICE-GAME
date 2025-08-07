import styled, { keyframes } from "styled-components";
import { useState } from "react";

const RoleDice = ({ roleDice, currentDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      roleDice();
      setIsRolling(false);
    }, 600);
  };

  return (
    <DiceContainer isRolling={isRolling}>
      <div className="dice" onClick={handleRoll}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const roll = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.05); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
`;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .dice {
    cursor: pointer;
  }

  .dice img {
    height: clamp(120px, 28vw, 160px);
    width: clamp(120px, 28vw, 160px);
    filter: drop-shadow(0 12px 18px rgba(2, 6, 23, 0.15));
    animation: ${(p) => (p.isRolling ? roll : "none")} 0.6s ease-in-out;
  }

  p {
    font-size: clamp(14px, 3.5vw, 18px);
    color: var(--muted);
  }

  @media (max-width: 640px) {
    margin-top: 32px;
  }
`;
