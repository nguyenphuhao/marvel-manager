import CharacterService from './../../services/CharacterService';
export const createCharacter = (character) => {
    return (dispatch, getState) => {
        //Make async call to database
        dispatch({type: 'CREATE_CHARACTER', character});
    }
}
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