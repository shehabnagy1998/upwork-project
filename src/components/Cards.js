import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import OneCard from './OneCard'

class Cards extends Component {
    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            color: PropTypes.string,
            height: PropTypes.number,
            width: PropTypes.string
        })),
        animation: PropTypes.string,
        setAnim: PropTypes.func
    }

    render() {
        const { cards, animation, setAnim } = this.props;

        return (
            <div className="card-system">
                <div className="overlay"></div>
                <div className="animation">
                    <h1>Choose animation</h1>
                    <form>
                        <div>
                            <label htmlFor="anim1">animation-1</label>
                            <input type="radio"
                                name="animation"
                                defaultChecked={animation === "anim1"}
                                onChange={() => { setAnim("anim1") }} />
                        </div>
                        <div>
                            <label htmlFor="anim2">animation-2</label>
                            <input type="radio"
                                name="animation"
                                defaultChecked={animation === "anim2"}
                                onChange={() => { setAnim("anim2") }} />
                        </div>
                    </form>
                </div>
                <div className="cards">
                    {
                        cards.map(card => {
                            return <OneCard card={card} key={card.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards,
        animation: state.animation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAnim: (val) => { dispatch({ type: "SET_ANIMATION", value: val }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
