import axios from 'axios';
import {
  FACEBOOK_DOWNLOAD_API_KEY,
  MP3_API_KEY,
  SEARCH_API_KEY,
  baseURL,
  hostURL,
} from './configs';

const axiosApi = axios;
axiosApi.interceptors.response.use((response) => {
  try {
    if (response.data) return response.data;

    return response;
  } catch (error) {
    console.log('axiosApi:::error', error);
  }
});

const axiosToMP3Client = axiosApi.create({
  baseURL: baseURL.toMP3YT,
  headers: {
    'X-RapidAPI-Key': MP3_API_KEY,
    'X-RapidAPI-Host': hostURL.toMP3YT,
  },
});

const axiosSearchClient = axiosApi.create({
  baseURL: baseURL.searchVideoYT,
  headers: {
    'X-RapidAPI-Key': SEARCH_API_KEY,
    'X-RapidAPI-Host': hostURL.toMP3YT,
  },
});

const axiosFacebookClient = axiosApi.create({
  baseURL: baseURL.facebookDownload,
  headers: {
    'X-RapidAPI-Key': FACEBOOK_DOWNLOAD_API_KEY,
    'X-RapidAPI-Host': hostURL.facebookDownload,
  },
});

export { axiosSearchClient, axiosToMP3Client, axiosFacebookClient };
