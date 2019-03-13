import MarvelAPI from '../config/MarvelAPI';
class CharacterService {
    fetchCharacters(params){
        const FETCH_CHARACTERS = "/v1/public/characters";
        return MarvelAPI.request({
            url: `${FETCH_CHARACTERS}?limit=${params.limit}&offset=${params.offset}`,
            method: 'get',
            params: params
        });
    }
    fetchCharacterById(id){
        const FETCH_CHARACTERS = "/v1/public/characters";
        return MarvelAPI.get(FETCH_CHARACTERS+"/"+id);
    }
    fetchCommicsByCharacter(id){
        const FETCH_COMICS_BY_CHARACTER = `/v1/public/characters/${id}/comics`
        return MarvelAPI.get(FETCH_COMICS_BY_CHARACTER);
    }
}
export default new CharacterService();