import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export function GameBoard({ numberOfChampions }) {
    const [allChampsArray, setAllChampsArray] = useState([])

    // http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Aatrox.png

    // url for loading screens http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
        const data = await response.json()
  
        // Extract champion names from the data
        const allChampionNames = Object.keys(data.data)
        setAllChampsArray(allChampionNames)
        
      }
      fetchData()
    }, [])


    return (
        <>
            <p>Playing... with {numberOfChampions} Champions!</p>
            {allChampsArray.map((champ, index) => {
                <Card champ={champ} index={index}/>
            })}
        </>
        
    )
}

GameBoard.propTypes = {
    numberOfChampions: PropTypes.number
}