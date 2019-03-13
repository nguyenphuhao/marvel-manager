const initState = {
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                loaded: false
            };
        case 'FETCH_CHARACTERS_SUCCESS':
            return {
                ...state,
                ...action.result.data.data,
                selectedId: null,
                loaded: true
            };
        case 'FETCH_CHARACTERS_FAILURE':
            return {
                ...state,
                loaded: true
            };

        case 'FETCH_CHARACTERS_DETAILS':
            return {
                ...state,
                loaded: false
            };
        case 'FETCH_CHARACTERS_DETAILS_SUCCESS':
        console.log(action.result)
            return {
                ...state,
                ...action.result,
                loaded: true
            };
        case 'FETCH_CHARACTERS_DETAILS_FAILURE':
            return {
                ...state,
                loaded: true
            };
        case 'SELECT_CHARACTER':
            return { ...state, selectedId: action.selectedId };
        case 'CALL_ERRORS':
            return state;
        default:
            return state;
    }
}

export default characterReducer;