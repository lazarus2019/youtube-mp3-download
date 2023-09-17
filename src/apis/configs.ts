const baseURL = {
  searchVideoYT: import.meta.env.VITE_YOUTUBE_SEARCH_URL,
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_URL,
};

const hostURL = {
  toMP3YT: import.meta.env.VITE_YOUTUBE_MP3_HOST,
};

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;


export { baseURL, API_KEY, hostURL };