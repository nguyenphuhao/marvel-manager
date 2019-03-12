const initState = {
    data: []
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_CHARACTERS':
            console.log(action.result.data);
            return action.result.data;
        case 'CALL_ERRORS':
            return state;
        default:
            return state;
    }
}

export default characterReducer;