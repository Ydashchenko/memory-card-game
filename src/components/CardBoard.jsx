import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Card } from './Card'

export function CardBoard({ numberOfChampions }) {
    const [allChampsArray, setAllChampsArray] = useState([]);
    const [deckToPlay, setDeckToPlay] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
            const data = await response.json();

            // Extract champion names from the data
            const allChampionNames = Object.keys(data.data);
            setAllChampsArray(allChampionNames);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (numberOfChampions > allChampsArray.length) {
            return; // Don't proceed if the number of champions is more than available
        }

        const shuffledChamps = allChampsArray.slice(); // Create a copy of the array
        for (let i = shuffledChamps.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledChamps[i], shuffledChamps[j]] = [shuffledChamps[j], shuffledChamps[i]];
        }

        const selectedChamps = shuffledChamps.slice(0, numberOfChampions);
        setDeckToPlay(selectedChamps);
    }, [numberOfChampions, allChampsArray]);

    return (
        <main>
            <p>Number of champs - {numberOfChampions}</p>
            {deckToPlay.map((champ) => (
                <Card champ={champ} key={champ} />
            ))}
        </main>
    );
}


CardBoard.propTypes = {
    numberOfChampions: PropTypes.number
}