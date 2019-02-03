import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {

    const { color, height, width, id } = card;

    const cardStyle = {
        'backgroundColor': color,
        'height': height,
        'width': width
    }

    return (
        <div className="one-card" style={cardStyle}>
            <Link to={`/card/${id}`} className="one-card-link" title={`card #${id}`}></Link>
        </div>
    )
}

export default Card
