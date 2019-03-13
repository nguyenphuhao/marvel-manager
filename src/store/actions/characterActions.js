import CharacterService from './../../services/CharacterService';
export const fetchCharacters = (params) => {
    return async (dispatch, getState) => {
        try {
            let result = null;
            dispatch({type: 'FETCH_CHARACTERS', result });
            result = await CharacterService.fetchCharacters(params);
            dispatch({type: 'FETCH_CHARACTERS_SUCCESS', result});
        } catch (error) {
            dispatch({type: 'FETCH_CHARACTERS_FAILURE', error});
        }
    }
}
export const fetchCharacterById = (id) => {
    return async (dispatch, getState) => {
        try {
            let result = null;
            dispatch({type: 'FETCH_CHARACTERS', result });
            result = await CharacterService.fetchCharacterById(id);
            dispatch({type: 'FETCH_CHARACTERS_SUCCESS', result});
        } catch (error) {
            dispatch({type: 'FETCH_CHARACTERS_FAILURE', error});
        }
    }
}

export const selectCharacter = (selectedId) => {
    return (dispatch, getState) => {
        dispatch({type: 'SELECT_CHARACTER', selectedId});
    }
}