
import styled from 'styled-components'

const NumberSelector = ({ selectedNumber ,setSelectedNumber,error,setError}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorhandler=(val)=>{
    setSelectedNumber(val);
    setError("");
  }

  return (
    <NumberSelectorContainer>
      <p>{error}</p>
      <div className="flex">
        {arrNumber.map((val, index) => (
          <Box
            isSelected={val === selectedNumber}
            key={index}
            onClick={() => numberSelectorhandler(val)}
          >
            {val}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector

const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=> props.isSelected ? "black" : "white"};
color: ${(props)=> props.isSelected ? "white" : "black"};

`

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}
`