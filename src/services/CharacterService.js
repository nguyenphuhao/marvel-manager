import MarvelAPI from '../config/MarvelAPI';
class CharacterService {
    constructor(){
        this.FETCH_ALL_CHARACTER = "/v1/public/characters";
        this.FETCH_CHARACTER_BY_ID = "/v1/public/characters/:characterId";
    }
    fetchCharacters(params){
        console.log(params);
        return MarvelAPI.request({
            url: `${this.FETCH_ALL_CHARACTER}?limit=${params.limit}&offset=${params.offset}`,
            method: 'get',
            params: params
        });
    }
    fetchCharacterById(){
        return MarvelAPI.get(this.FETCH_CHARACTER_BY_ID);
    }
}
export default new CharacterService();