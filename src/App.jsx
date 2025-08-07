import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import styled from "styled-components";
import BackgroundFX from "./components/BackgroundFX";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      <BackgroundFX />
      <AppShell>
        {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
      </AppShell>
    </>
  );
}

export default App;

const AppShell = styled.div`
  position: relative;
  z-index: 1;
`;
