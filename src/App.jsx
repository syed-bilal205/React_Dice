import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay";
import { useState } from "react";

const App = () => {
  const [GameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>{GameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};
export default App;
