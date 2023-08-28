import '../styles/Popup.css'
import PropTypes from 'prop-types'

export function Popup({ score, endGame, playAgain }) {

    return (
        <div className="popup">
            <div className="popup-content">
                <h2 className='end-game-header'>{endGame == 'lose' ? 'Defeat!' : 'Victory!'}</h2>
                <p className='result-text'>{endGame == 'lose' ? `You lost with score of ${score}. Try again!` : `You won with score of ${score}!`}</p>
                <button onClick={playAgain} className="play-again">Play again!</button>
            </div>
        </div>
    );
}

Popup.propTypes = {
    score: PropTypes.number,
    endGame: PropTypes.string,
    playAgain: PropTypes.func
}
