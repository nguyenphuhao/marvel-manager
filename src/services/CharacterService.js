import MarvelAPI from '../config/MarvelAPI';
class CharacterService {
    constructor(){
        this.FETCH_ALL_CHARACTER = "/v1/public/characters";
    }
    fetchCharacters(params){
        console.log(params);
        return MarvelAPI.request({
            url: `${this.FETCH_ALL_CHARACTER}?limit=${params.limit}&offset=${params.offset}`,
            method: 'get',
            params: params
        });
    }
    fetchCharacterById(id){
        return MarvelAPI.get(this.FETCH_ALL_CHARACTER+"/"+id);
    }
}
export default new CharacterService();