import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

class CardFullscreen extends Component {
    static propTypes = {
        card: PropTypes.shape({
            id: PropTypes.number,
            color: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.string,
        }),
        active: PropTypes.number,
        setActive: PropTypes.func
    }

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
        setActive: () => { dispatch({ type: "SET_ACTIVE", value: null }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardFullscreen)
