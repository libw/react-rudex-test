let defaultState = {
    showNum: '1'
}

export default function show(state = defaultState, action = {}) {
    switch (action.type) {
        case 'SWITCH':
        console.log(action)
        const count = state.showNum
            return { showNum : action.payload }
        default:
            return state
    }
}
