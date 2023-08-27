import PropTypes from 'prop-types'

export function StartScreen({ startGame }) {
    return (
        <>
            <h2>Choose Difficulty:</h2>
            <div>
                <button onClick={() => startGame(10)}>Iron</button>
                <button onClick={() => startGame(20)}>Bronze</button>
                <button onClick={() => startGame(30)}>Silver</button>
                <button onClick={() => startGame(40)}>Gold</button>
                <button onClick={() => startGame(50)}>Platinum</button>
                <button onClick={() => startGame(60)}>Emerald</button>
                <button onClick={() => startGame(70)}>Diamond</button>
                <button onClick={() => startGame(80)}>Master</button>
                <button onClick={() => startGame(90)}>Grandmaster</button>
                <button onClick={() => startGame(100)}>Challenger</button>
            </div>
            
        </>
    )
    
}

StartScreen.propTypes = {
    startGame: PropTypes.func
}