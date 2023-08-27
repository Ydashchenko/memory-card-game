import PropTypes from 'prop-types'

export function StartScreen({ startGame }) {
    return (
        <main>
            <h2>Choose Difficulty:</h2>
            <div>
                <button onClick={() => startGame(5)}>Iron</button>
                <button onClick={() => startGame(10)}>Bronze</button>
                <button onClick={() => startGame(15)}>Silver</button>
                <button onClick={() => startGame(20)}>Gold</button>
                <button onClick={() => startGame(25)}>Platinum</button>
                <button onClick={() => startGame(30)}>Emerald</button>
                <button onClick={() => startGame(35)}>Diamond</button>
                <button onClick={() => startGame(40)}>Master</button>
                <button onClick={() => startGame(45)}>Grandmaster</button>
                <button onClick={() => startGame(50)}>Challenger</button>
            </div>
        </main>
    )
    
}

StartScreen.propTypes = {
    startGame: PropTypes.func
}
