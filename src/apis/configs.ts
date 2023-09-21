const baseURL = {
  searchVideoYT: import.meta.env.VITE_YOUTUBE_SEARCH_URL,
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_URL,
};

const hostURL = {
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_HOST,
};

const MP3_API_KEY = import.meta.env.VITE_YOUTUBE_MP3_API_KEY;
const SEARCH_API_KEY = import.meta.env.VITE_YOUTUBE_SEARCH_API_KEY;

export { baseURL, MP3_API_KEY, SEARCH_API_KEY, hostURL };
