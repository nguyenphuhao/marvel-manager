import CharacterService from './../../services/CharacterService';
export const fetchCharacters = (params) => {
    return async (dispatch, getState) => {
        try {
            let result = await CharacterService.fetchCharacters(params);
            dispatch({type: 'FETCH_ALL_CHARACTERS', result});
        } catch (error) {
            dispatch({type: 'CALL_ERRORS', error});
        }
    }
}

export const selectCharacter = (selectedId) => {
    return (dispatch, getState) => {
        dispatch({type: 'SELECT_CHARACTER', selectedId});
    }
}