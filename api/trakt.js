import axios from 'axios';

export const host = 'https://api.trakt.tv';
const  tranktApiClientId = "5a7b382cf98145df17ee1b5df5d8b2ab058ac2ca8c5501d09368b8f8feef7e48";

const url = axios.create({
  baseURL: host,
});

const api = {
  trending: () => url.get('/movies/trending?page=1&limit=30'),
  search: (word, type)=> url.get(`/search/${type}?query=${word}`)
}

url.interceptors.request.use(async (config) => {
  // Setting required headers for trakt API
  config.headers['Content-type'] = 'application/json';
  config.headers['trakt-api-key'] = tranktApiClientId;
  config.headers['trakt-api-version'] = '2';
  return config;
});

export default api;
