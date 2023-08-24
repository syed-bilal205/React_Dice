import styled from "styled-components";
import diceImage from "../../public/assets/dices.png";
import { Button } from "../styled/Button";
import PropTypes from "prop-types";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={diceImage} alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  );
};

StartGame.propTypes = {
  toggle: PropTypes.func.isRequired,
};

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 6rem;
      white-space: nowrap;
    }
  }
`;

export default StartGame;
