import axios from 'axios';
import { MP3_API_KEY, SEARCH_API_KEY, baseURL, hostURL } from './configs';

const axiosToMP3Client = axios.create({
  baseURL: baseURL.toMP3YT,
  headers: {
    'X-RapidAPI-Key': MP3_API_KEY,
    'X-RapidAPI-Host': hostURL.toMP3YT,
  },
});

const axiosSearchClient = axios.create({
  baseURL: baseURL.searchVideoYT,
  headers: {
    'X-RapidAPI-Key': SEARCH_API_KEY,
    'X-RapidAPI-Host': hostURL.toMP3YT,
  },
});

export { axiosSearchClient, axiosToMP3Client };
