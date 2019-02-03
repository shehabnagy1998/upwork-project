import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Card extends Component {

    render() {
        const { color, height, width, id } = this.props.card;

        const cardStyle = {
            'backgroundColor': color,
            'height': height,
            'width': width
        }
        return (
            <NavLink to={`/card/${id}`}
                className={`one-card ${this.props.active === id ? "active" : null}`}
                style={cardStyle}
                onClick={() => { this.props.setActive(id) }}
            >
            </NavLink>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.active
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (id) => { dispatch({ type: "SET_ACTIVE", value: id }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
