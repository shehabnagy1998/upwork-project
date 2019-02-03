const rndColors = ['#c66683', '#a677a6', '#6ccb99', '#b2a87f', '#ffb700', '#9695d3', '#ffa269', '#92b7bc', '#7a98ac',
    '#ff6c11', '#e0a9bf', '#d5baa8'];

const generateArray = (nums, min, max, colors = rndColors) => {
    let id = 1;
    return new Array(nums).fill(0).map(() => {
        return {
            id: id++,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
            height: Math.floor((Math.random() * (max - min)) + min),
            width: "200px"
        }
    })
}

const initState = {
    cards: generateArray(30, 100, 300),
    active: false
}

const rootReducer = (state = initState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "SET_ACTIVE":
            newState.active = action.value;
            return newState
        default:
            return newState
    }
}

export default rootReducer