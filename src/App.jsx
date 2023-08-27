import { useEffect, useState } from 'react'
import './App.css'
import { StartScreen } from './components/startScreen'
import { GameBoard } from './components/GameBoard'

function App() {
  //const [championNames, setChampionNames] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [numberOfChampions, setNumberOfChampions] = useState('')
 
  function startGame(number) {
    setIsPlaying(true)
    setNumberOfChampions(number)
  }

  return (
    <>
    <h1>League Of Legends Memory Card Game</h1>
    {!isPlaying ?
      <StartScreen 
        startGame={startGame} 
      />
      :
      <GameBoard numberOfChampions={numberOfChampions} />
    }
    </>
  )

}

export default App
