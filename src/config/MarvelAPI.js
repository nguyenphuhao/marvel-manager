import axios from 'axios';
const MarvelAPI = axios.create({
    baseURL: process.env.REACT_APP_MARVEL_API_URL,
});
MarvelAPI.defaults.params = {
    apikey: process.env.REACT_APP_MARVEL_API_KEY,
    hash: process.env.REACT_APP_MARVEL_API_HASH,
    ts: ""
}
// MarvelAPI.prototype.request = function(config){
//     var defaultConfig = {
//         baseURL: process.env.REACT_APP_MARVEL_API_URL,
//         params: {
//             apikey: process.env.REACT_APP_MARVEL_API_KEY,
//             hash: process.env.REACT_APP_MARVEL_API_HASH,
//             ts: ""
//         },
//         data: {}
//     }
//     MarvelAPI.request()
// }
// MarvelAPI.interceptors.request.use(function (c) {
//     // Do something before request is sent
//     let newConfig = Object.assign({}, c);
//     newConfig.url = `${newConfig.url}?ts=&apikey=${}&hash=${process.env.REACT_APP_MARVEL_API_HASH}`
//     return newConfig;
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
export default MarvelAPI;