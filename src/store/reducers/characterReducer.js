const initState = {
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {
                ...state,
                loaded: false,
                error: null
            };
        case 'FETCH_CHARACTERS_SUCCESS':
            return {
                ...state,
                ...action.result.data.data,
                selectedId: null,
                loaded: true,
                error: null
            };
        case 'FETCH_CHARACTERS_FAILURE':
            return {
                ...state,
                loaded: true,
                error: action.error
            };

        case 'FETCH_CHARACTERS_DETAILS':
            return {
                ...state,
                loaded: false,
                error: null
            };
        case 'FETCH_CHARACTERS_DETAILS_SUCCESS':
            return {
                ...state,
                ...action.result,
                loaded: true,
                error: null
            };  
        case 'FETCH_CHARACTERS_DETAILS_FAILURE':
            return {
                ...state,
                loaded: true,
                error: action.error
            };
        case 'SELECT_CHARACTER':
            return { ...state, selectedId: action.selectedId, error: null };
        case 'CALL_ERRORS':
            return state;
        default:
            return state;
    }
}

export default characterReducer;