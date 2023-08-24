import styled from "styled-components";

const RoleDice = ({ changeDice, currentDice }) => {
  return (
    <>
      <DiceContainer>
        <div className="dice" onClick={changeDice}>
          <img src={`/assets/cube${currentDice}.png`} alt="dice images" />
        </div>
        <p>Click on the Dice to roll</p>
      </DiceContainer>
    </>
  );
};

const DiceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;

export default RoleDice;
