import PropTypes from 'prop-types'

export function Card({ champ }) {
    return (
        <button>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${champ === "FiddleSticks" ? "Fiddlesticks" : champ}.png`} alt={champ} />
            <p>{champ}</p>
        </button>
    )
}

Card.propTypes = {
    champ: PropTypes.string,
    index: PropTypes.number
}
