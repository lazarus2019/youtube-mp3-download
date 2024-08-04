const baseURL = {
  searchVideoYT: import.meta.env.VITE_YOUTUBE_SEARCH_URL,
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_URL,
  facebookDownload: import.meta.env.VITE_FACEBOOK_DOWNLOAD_URL,
};

const hostURL = {
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_HOST,
  facebookDownload: import.meta.env.VITE_FACEBOOK_DOWNLOAD_HOST,
};

const MP3_API_KEY = import.meta.env.VITE_YOUTUBE_MP3_API_KEY;
const SEARCH_API_KEY = import.meta.env.VITE_YOUTUBE_SEARCH_API_KEY;
const FACEBOOK_DOWNLOAD_API_KEY = import.meta.env.VITE_FACEBOOK_DOWNLOAD_KEY;

export {
  baseURL,
  hostURL,
  MP3_API_KEY,
  SEARCH_API_KEY,
  FACEBOOK_DOWNLOAD_API_KEY,
};
