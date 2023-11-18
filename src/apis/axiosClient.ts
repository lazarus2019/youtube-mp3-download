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
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '9e7b682274msh39883b41d81747ap1d7ab0jsnac87b06d469a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export { axiosSearchClient, axiosToMP3Client };
