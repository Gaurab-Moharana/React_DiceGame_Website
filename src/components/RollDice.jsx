import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, diceRoll }) => {
  return (
    <>
      <DiceContainer>
        <div className="dice" onClick={diceRoll}>
          <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <p>Click on Dice to roll</p>
      </DiceContainer>
    </>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  .dice img {
    width: 200px;
  }
  p {
    font-size: 24px;
  }
`;
