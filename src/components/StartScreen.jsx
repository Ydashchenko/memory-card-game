import PropTypes from 'prop-types'
import '../styles/StartScreen.css'
import { RankButton } from './RankButton'

export function StartScreen({ startGame, Ranks, currentRank }) {
    const highestAccessibleRank = currentRank.i + 1

    return (
        <main className='start-screen'>
            <h1>League Of Brain</h1>
            <h2>Choose Difficulty:</h2>
            <div className='rank-list'>
                {Ranks.map((Rank) => (
                    <RankButton
                        Rank={Rank}
                        startGame={startGame}
                        key={Rank.id}
                        disabled={Rank.id > highestAccessibleRank}
                    />
                ))}
            </div>
            <div className='rules-container'>
                <h3 className='rules'>Rules: </h3>
                <p>Click each champion only once!</p>
            </div>
        </main>
    )
    
}

StartScreen.propTypes = {
    startGame: PropTypes.func,
    Ranks: PropTypes.array,
    currentRank: PropTypes.object
}
