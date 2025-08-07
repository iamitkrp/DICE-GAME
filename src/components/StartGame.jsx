import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="art">
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <p className="tagline">Beat the odds. Roll your luck.</p>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  min-height: calc(100vh - 48px);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 32px;
  margin: 0 auto;
  align-items: center;

  .art img {
    filter: drop-shadow(0 16px 28px rgba(2, 6, 23, 0.15));
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .content h1 {
    font-size: clamp(44px, 10vw, 84px);
    line-height: 0.95;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }

  .content .tagline {
    color: var(--muted);
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    .content {
      align-items: center;
    }
    .content h1 {
      font-size: clamp(40px, 12vw, 64px);
      white-space: normal;
    }
  }
`;
