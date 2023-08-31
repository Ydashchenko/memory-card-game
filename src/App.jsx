import { useState } from 'react'
import './styles/App.css'
import { StartScreen } from './components/StartScreen'
import { CardBoard } from './components/CardBoard'
import { Ranks } from './components/Ranks'
import HighScoreImg from './assets/high-score.jpg'

export default function App() {
  const [tab, setTab] = useState('main')
  const [numberOfChampions, setNumberOfChampions] = useState('')
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);
  const [currentRank, setCurrentRank] = useState(JSON.parse(localStorage.getItem('currentRank')) || { cr: 'Unranked', i: -1 })
  const [difficulty, setDifficulty] = useState(-1)


  function startGame(number, inputDifficulty) {
    setDifficulty(inputDifficulty)
    setTab('game')
    setNumberOfChampions(number)
  }

  return (
    <>
    <header>
      <div className='current-rank'>
        <p>Your Rank: {currentRank.cr}</p>
        {currentRank.i >= 0 && (
          <img src={Ranks[currentRank.i].img} alt={currentRank.cr} />
        )}
      </div>
      <div className='record-container'>
        <img src={HighScoreImg} alt='high-score' />
        <p className='record'>Your Record: {highScore}</p>
      </div>
    </header>
    {tab === "main" ? (
      <StartScreen
        currentRank={currentRank}
        Ranks={Ranks}
        startGame={startGame}
      />
    ) : (
      <CardBoard
        Ranks={Ranks}
        currentRank={currentRank}
        setCurrentRank={setCurrentRank}
        difficulty={difficulty}
        setTab={setTab} 
        numberOfChampions={numberOfChampions}
        highScore={parseInt(highScore)}
        setHighScore={setHighScore}
      />
    )}
    </>
  )

}

