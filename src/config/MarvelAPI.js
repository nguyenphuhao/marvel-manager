import axios from 'axios';
const MarvelAPI = axios.create({
    baseURL: process.env.REACT_APP_MARVEL_API_URL,
});
MarvelAPI.defaults.params = {
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: process.env.REACT_APP_MARVEL_API_HASH,
    ts: ""
}
export default MarvelAPI;