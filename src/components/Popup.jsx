import '../styles/Popup.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';


export function Popup({ score, endGame, playAgain, newHighScore, setCurrentRank, difficulty, currentRank, Ranks, shouldShowNewRank, setShouldShowNewRank }) {
    

    useEffect(() => {
        if (endGame === 'win' && difficulty > currentRank.i) {
            setShouldShowNewRank(true)
            const brandNewRank = { cr: Ranks[difficulty].rankName, i: Ranks[difficulty].id };
            setCurrentRank(brandNewRank);
            localStorage.setItem('currentRank', JSON.stringify(brandNewRank));
            console.log(shouldShowNewRank)
        }

    }, [endGame, difficulty, currentRank.i, Ranks, setCurrentRank, shouldShowNewRank, setShouldShowNewRank]);

    return (
        <div className="popup">
            <div className="popup-content">
                <div className='end-game-info'>
                    <h2 className='end-game-header'>{endGame === 'lose' ? 'Defeat!' : 'Victory!'}</h2>
                    {shouldShowNewRank && (
                        <div className='new-rank-container'>
                            <p>NEW RANK!</p>
                            <p>You are promoted to {Ranks[difficulty].rankName}!</p>
                            <img className='popup-rank' src={Ranks[difficulty].img} alt={Ranks[difficulty].rankName} />
                        </div>
                    )}
                    {newHighScore && (
                        <p className='new-record'>New Record!</p>
                    )}
                    <p className='result-text'>{endGame === 'lose' ? `You lost with score of ${score}. Try again!` : `You won with score of ${score}!`}</p>
                </div>
                <button onClick={playAgain} className="play-again">Play again!</button>
            </div>
        </div>
    );
}

Popup.propTypes = {
    score: PropTypes.number,
    endGame: PropTypes.string,
    playAgain: PropTypes.func,
    newHighScore: PropTypes.bool,
    setCurrentRank: PropTypes.func,
    difficulty: PropTypes.number,
    currentRank: PropTypes.object,
    Ranks: PropTypes.array,
    shouldShowNewRank: PropTypes.bool,
    setShouldShowNewRank: PropTypes.func
}
