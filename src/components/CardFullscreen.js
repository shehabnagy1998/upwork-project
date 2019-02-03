import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CardFullscreen extends Component {

    render() {
        const { color } = this.props.card;

        const cardStyle = {
            'backgroundColor': color
        }

        return (
            <div className="card-fullscreen" style={cardStyle}>
                <Link to={`/`} className="one-card-link"></Link>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        card: state.cards.find(card => (card.id).toString() === id)
    }
}

export default connect(mapStateToProps)(CardFullscreen)
