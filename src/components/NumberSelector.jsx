import styled from "styled-components";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="label">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  width: 100%;

  .flex {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  p {
    font-size: clamp(16px, 3.5vw, 20px);
    font-weight: 700;
  }
  .label {
    color: var(--muted);
    font-weight: 600;
  }
  .error {
    min-height: 24px;
    color: var(--danger);
    font-size: 14px;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    align-items: center;
    .flex {
      justify-content: center;
    }
    .label {
      text-align: center;
      width: 100%;
    }
  }
`;

const Box = styled.div`
  height: clamp(48px, 12vw, 64px);
  width: clamp(48px, 12vw, 64px);
  border: 2px solid ${(props) => (props.isSelected ? "var(--accent)" : "#e2e8f0")};
  background: ${(props) => (props.isSelected ? "rgba(124,58,237,0.08)" : "white")};
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: clamp(18px, 5vw, 22px);
  font-weight: 700;
  color: ${(props) => (props.isSelected ? "var(--accent)" : "#0f172a")};
  cursor: pointer;
  user-select: none;
  box-shadow: ${(props) => (props.isSelected ? "0 6px 16px rgba(124,58,237,0.18)" : "0 2px 8px rgba(16,24,40,0.04)")};
  transform: translateY(0);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(16, 24, 40, 0.12);
  }
`;
