import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 12px 20px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: 10px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(124, 58, 237, 0.35);
  transform: translateY(0);
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.3s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(124, 58, 237, 0.45);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 16px rgba(124, 58, 237, 0.35);
  }
  &:focus-visible {
    outline: 3px solid rgba(124, 58, 237, 0.45);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
  }
`;
export const OutlineButton = styled(Button)`
  background: white;
  color: var(--accent);
  border: 2px solid var(--accent);
  box-shadow: 0 4px 12px rgba(16, 24, 40, 0.06);
  &:hover {
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    color: white;
    border-color: transparent;
  }
`;
