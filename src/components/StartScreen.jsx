import PropTypes from 'prop-types'

import emblemIron from '../assets/emblem-iron.png'
import emblemBronze from '../assets/emblem-bronze.png'
import emblemSilver from '../assets/emblem-silver.png'
import emblemGold from '../assets/emblem-gold.png'
import emblemPlatinum from '../assets/emblem-platinum.png'
import emblemDiamond from '../assets/emblem-diamond.png'
import emblemMaster from '../assets/emblem-master.png'
import emblemGrandmaster from '../assets/emblem-grandmaster.png'
import emblemChallenger from '../assets/emblem-challenger.png'

import '../styles/StartScreen.css'

export function StartScreen({ startGame }) {
    return (
        <main className='start-screen'>
            <h1>League Of Brain</h1>
            <h2>Choose Difficulty:</h2>
            <div className='rank-list'>
                <button className='rank-btn' onClick={() => startGame(5)}>
                    <img className='emblem' src={emblemIron} alt="Iron" />
                    <p>Iron</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(10)}>
                    <img className='emblem' src={emblemBronze} alt="Bronze" />
                    <p>Bronze</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(15)}>
                    <img className='emblem' src={emblemSilver} alt="Silver" />
                    <p>Silver</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(20)}>
                    <img className='emblem' src={emblemGold} alt="Gold" />
                    <p>Gold</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(25)}>
                    <img className='emblem' src={emblemPlatinum} alt="Platinum" />
                    <p>Platinum</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(35)}>
                    <img className='emblem' src={emblemDiamond} alt="Diamond" />
                    <p>Diamond</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(40)}>
                    <img className='emblem' src={emblemMaster} alt="Master" />
                    <p>Master</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(45)}>
                    <img className='emblem' src={emblemGrandmaster} alt="Grandmaster" />
                    <p>Grandmaster</p>
                </button>
                <button className='rank-btn' onClick={() => startGame(50)}>
                    <img className='emblem' src={emblemChallenger} alt="Challenger" />
                    <p>Challenger</p>
                </button>
            </div>
            <div className='rules-container'>
                <h3 className='rules'>Rules: </h3>
                <p>Click each champion only once!</p>
            </div>
        </main>
    )
    
}

StartScreen.propTypes = {
    startGame: PropTypes.func
}
