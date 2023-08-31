import PropTypes from 'prop-types'
import '../styles/RankButton.css'

export function RankButton({ startGame, Rank, disabled }) {
    return (
        <button 
            className={`rank-btn ${disabled ? 'blocked' : ''}`}
            onClick={() => startGame(Rank.champions, Rank.id)}
            disabled={disabled}
        >
            <img className='emblem' src={Rank.img} alt={Rank.rankName} />
            <p>{Rank.rankName}</p>
        </button>
    )
}

RankButton.propTypes = {
    startGame: PropTypes.func,
    Rank: PropTypes.object,
    disabled: PropTypes.bool
}
