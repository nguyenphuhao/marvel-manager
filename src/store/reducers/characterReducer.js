const initState = {
    selectedId: null,
    characters: [],
    gridProps: {
        offset: 0,
        limit: 5,
        total: 0
    }
}

const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_ALL_CHARACTERS':
            //console.log(action.result.data);
            return {
                ...state,
                characters: action.result.data.data.results,
                gridProps: {
                    offset: action.result.data.data.offset,
                    limit: action.result.data.data.limit,
                    total: action.result.data.data.total
                }
            };
        case 'FETCH_CHARACTER_BY_ID':
            //console.log(action.result.data);
            return {
                ...state,
                characters: action.result.data.data.results,
            };
        case 'SELECT_CHARACTER':
            //console.log(action.selectedId);
            return { ...state, selectedId: action.selectedId };
        case 'CALL_ERRORS':
            return state;
        default:
            return state;
    }
}

export default characterReducer;