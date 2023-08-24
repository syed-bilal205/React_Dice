import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [scorce, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const changeDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const numbers = randomNumber(1, 7);
    setCurrentDice(() => numbers);

    if (selectedNumber === numbers) {
      setScore((prev) => prev + numbers);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore scorce={scorce} />
          <NumberSelector
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}
          />
        </div>
        <RoleDice currentDice={currentDice} changeDice={changeDice} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={() => setShowRules((prev) => !prev)}>
            {showRules ? "Hide" : "Show"} Rules
          </Button>
          {showRules ? <Rules /> : ""}
        </div>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  padding-top: 1px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 20px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Gameplay;
