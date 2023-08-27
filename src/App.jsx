import { useEffect, useState } from 'react'
import './App.css'
import { StartScreen } from './components/startScreen'
import { CardBoard } from './components/CardBoard'

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
    <header>
      <h1>League Of Legends Memory Card Game</h1>
    </header>
    {!isPlaying ?
      <StartScreen 
        startGame={startGame} 
      />
      :
      <CardBoard numberOfChampions={numberOfChampions} />
    }
    </>
  )

}

export default App
