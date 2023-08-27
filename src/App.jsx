import { useEffect, useState } from 'react'
import './App.css'
import { StartScreen } from './components/startScreen'

function App() {
  //const [championNames, setChampionNames] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [numberOfChampions, setNumberOfChampions] = useState('')
 
  function startGame(number) {
    setIsPlaying(true)
    setNumberOfChampions(number)
  }


    // http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Aatrox.png

    // url for loading screens http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
    /*
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
        const data = await response.json()
  
        // Extract champion names from the data
        const names = Object.keys(data.data)
        setChampionNames(names)
        
      }
      fetchData()
    }, [])
    */

    return (
      <>
      <h1>League Of Legends Memory Card Game</h1>
      {!isPlaying ?
        <StartScreen 
          startGame={startGame} 
        />
        :
        <p>Playing... with {numberOfChampions} Champions!</p>
      }
      </>
    )

}

export default App
