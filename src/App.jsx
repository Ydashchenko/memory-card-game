import { useState } from 'react'
import './styles/App.css'
import { StartScreen } from './components/StartScreen'
import { CardBoard } from './components/CardBoard'

export default function App() {
  const [tab, setTab] = useState('main')
  const [numberOfChampions, setNumberOfChampions] = useState('')
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);
 
  function startGame(number) {
    setTab('game')
    setNumberOfChampions(number)
  }

  return (
    <>
    <header>
      <p>High Score: {highScore}</p>
    </header>
    {tab === "main" ? (
      <StartScreen 
        startGame={startGame}
      />
    ) : (
      <CardBoard 
        setTab={setTab} 
        numberOfChampions={numberOfChampions}
        highScore={parseInt(highScore)}
        setHighScore={setHighScore}
      />
    )}
    </>
  )

}

