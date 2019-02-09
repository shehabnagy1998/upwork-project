import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Card extends Component {
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
        const { color, height, width, id } = this.props.card;
        const { setActive } = this.props

        const cardStyle = {
            'backgroundColor': color,
            'height': height,
            'width': width
        }
        return (
            <NavLink to={`/card/${id}`}
                className={`one-card ${this.props.active === id ? "active" : null}`}
                style={cardStyle}
                onClick={() => { setActive(id) }}
                title={`card #${id}`}
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
