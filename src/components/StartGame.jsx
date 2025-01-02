import React from 'react'
import styled  from 'styled-components'

const StartGame = ({ toggle }) => {
    
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice img" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame

const Container=styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

   .content h1{
    font-size: 96px;
    white-space: nowrap;
    width: 528px;
    height: 144px;
    font-weight: 700px;
   }
`;

const Button = styled.button`
  min-width: 220px;
  height: 44px;
  padding: 10px 18px;
  background: rgba(0, 0, 0, 1);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  align-items: end;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;