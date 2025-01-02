import React, { useState } from 'react'
import "@fontsource/poppins";
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

const App = () => {

  const[isGameStarted,setIsGameStarted]=useState(false);

  const togglePlay = (() => {
    setIsGameStarted((prev) => !prev)
  })
  
  return (
    <div>
      
      {isGameStarted ? <GamePlay /> : <StartGame toggle={togglePlay}/>}

    </div>
  )
}

export default App
