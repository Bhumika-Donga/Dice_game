
import styled from 'styled-components'

const RoleDice = ({currentDice,roleDices}) => {

    


  return (
    <DiceContainer>
      <div className='dice' onClick={roleDices}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
    cursor: pointer;
}

p{
    width: 229px;
    height: 36px;
    font-weight: 500px;
    font-size: 24px;
}
`