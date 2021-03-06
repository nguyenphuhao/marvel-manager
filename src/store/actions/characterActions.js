import CharacterService from './../../services/CharacterService';
var unexpected_error = {hasError: true, errorMsg: "Opps, Something went wrong!"};
export const fetchCharacters = (params) => {
    return async (dispatch, getState) => {
        try {
            let result = null;
            dispatch({ type: 'FETCH_CHARACTERS', result });
            result = await CharacterService.fetchCharacters(params);
            if (result.code !== 200) {
                console.log(result);
                dispatch({ type: 'FETCH_CHARACTERS_FAILURE', error: {hasError: true, errorMsg: result.message} });
            }
            dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', result });
        } catch (error) {

            dispatch({ type: 'FETCH_CHARACTERS_FAILURE', error: unexpected_error });
        }
    }
}
export const fetchCharacterById = (id) => {
    return async (dispatch, getState) => {
        try {
            let result = null;
            dispatch({ type: 'FETCH_CHARACTERS', result });
            result = await CharacterService.fetchCharacterById(id);
            dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', result });
        } catch (error) {
            dispatch({ type: 'FETCH_CHARACTERS_FAILURE', error: unexpected_error });
        }
    }
}
export const fetchCharacterDetails = (id) => {
    return async (dispatch, getState) => {
        try {
            let result = {characters: [], comics:[]};
            dispatch({ type: 'FETCH_CHARACTERS_DETAILS', result });
            let charResult = await CharacterService.fetchCharacterById(id);
            console.log(charResult)
            if (charResult.status === 200) {
                result.characters = charResult.data.data.results;
            }
            let comicsResult = await CharacterService.fetchCommicsByCharacter(id);
            if (comicsResult.status === 200) {
                result.comics = comicsResult.data.data.results;
            }
            
            dispatch({ type: 'FETCH_CHARACTERS_DETAILS_SUCCESS', result });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'FETCH_CHARACTERS_DETAILS_FAILURE', error: unexpected_error });
        }
    }
}

export const selectCharacter = (selectedId) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SELECT_CHARACTER', selectedId });
    }
}

export const enterCharacter = (selectedId) => {
    return (dispatch, getState) => {
        dispatch({ type: 'SELECT_CHARACTER_ENTER', selectedId });
    }
}