import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';



const GamePlay = () => {

  const [score,setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("");

  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const roleDices = () => {
    
    if (!selectedNumber){
      setError("You have not selected any number")
    return
    }

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber);
    }
    else{
      setScore(prev => prev - 2);
    }

    setSelectedNumber(undefined);
  };


  return (
    <MainConatiner>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <div>
        <RoleDice currentDice={currentDice} roleDices={roleDices}/>
      </div>
    </MainConatiner>
  );
}

export default GamePlay

const MainConatiner=styled.div`

padding: 70px 70px 0px 70px;
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}
`