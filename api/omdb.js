import axios from 'axios';

const OMDB_API_KEY= "94b3de6d"

export const host = 'https://www.omdbapi.com/';

const url = axios.create({
  baseURL: host,
});

const api = {
  omdbGet: (imdb) => url.get(`?apikey=${OMDB_API_KEY}&i=${imdb}`),
}

export default api;
