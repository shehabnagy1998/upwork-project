import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class CardFullscreen extends Component {

    render() {
        const { color } = this.props.card;

        const cardStyle = {
            'backgroundColor': color
        }

        return (
            <NavLink to={`/`}
                onClick={this.props.setActive}
                className="card-fullscreen"
                style={cardStyle}>
            </NavLink>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        card: state.cards.find(card => (card.id).toString() === id),
        active: state.active
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: () => { dispatch({ type: "SET_ACTIVE", value: false }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFullscreen)
