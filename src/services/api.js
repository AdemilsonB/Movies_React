import axios from "axios";

//base da URL: https://api.themoviedb.org/3/
//URL: https://api.themoviedb.org/3/movie/now_playing?api_key=d330c193d76504d0b0c0a8780235060c&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;