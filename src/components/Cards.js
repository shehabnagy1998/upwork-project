import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Cards extends Component {
    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            color: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.string
        }))
    }

    render() {
        const { cards } = this.props;

        return (
            <div className="card-system">

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards
    }
}

export default connect(mapStateToProps)(Cards)
