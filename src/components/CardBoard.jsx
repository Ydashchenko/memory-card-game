import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Card } from './Card'
import { Popup } from './Popup';
import '../styles/CardBoard.css'

export function CardBoard({ numberOfChampions, setTab, highScore, setHighScore }) {
    const [allChampsArray, setAllChampsArray] = useState([]);
    const [deckToPlay, setDeckToPlay] = useState([]);
    const [openedCards, setOpenedCards] = useState([]);
    const [score, setScore] = useState(0);
    const [endGame, setEndGame] = useState('');


    useEffect(() => {
        if (score === numberOfChampions) {
            setEndGame('win');
        }
    }, [score, numberOfChampions]);


    function handleCardClick(champ) {
        if (openedCards.includes(champ)) {
            if (score > highScore) {
                setHighScore(score); // Update high score in state
                localStorage.setItem("highScore", score);
            }
            setEndGame('lose');
        } else {
            // If the card is opened for the first time, increase score
            const newScore = score + 1;
            setScore(newScore);
            
            if (newScore > highScore) {
                setHighScore(newScore); // Update high score in state
                localStorage.setItem("highScore", newScore);
            }
            
            setOpenedCards([...openedCards, champ]);
            shuffleCards();
        }
    }
    

    function shuffleCards() {
        const shuffledChamps = deckToPlay.slice();
        for (let i = shuffledChamps.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledChamps[i], shuffledChamps[j]] = [shuffledChamps[j], shuffledChamps[i]];
        }
        setDeckToPlay(shuffledChamps);
    }

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
            return
        }

        const shuffledChamps = allChampsArray.slice();
        for (let i = shuffledChamps.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledChamps[i], shuffledChamps[j]] = [shuffledChamps[j], shuffledChamps[i]];
        }

        const selectedChamps = shuffledChamps.slice(0, numberOfChampions);
        setDeckToPlay(selectedChamps);
    }, [numberOfChampions, allChampsArray]);

    function playAgain() {
        setTab('main');
        setScore(0);
        setOpenedCards([]);
        setEndGame('');
        shuffleCards();
    }

    return (
        <main className='card-board-container'>
            <p className='score'>Current score: {score}</p>
            <div className='card-board'>
                {deckToPlay.map((champ) => (
                    <Card onCardClick={handleCardClick} champ={champ} key={champ} />
                ))}
                {endGame && (
                    <Popup score={score} endGame={endGame} playAgain={playAgain}/>
                )}
            </div>
        </main>
    );
}


CardBoard.propTypes = {
    numberOfChampions: PropTypes.number,
    setTab: PropTypes.func,
    highScore: PropTypes.number,
    setHighScore: PropTypes.func
}
