/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPID_API_KEY: string;
  readonly VITE_YOUTUBE_MP3_URL: string;
  readonly VITE_YOUTUBE_MP3_HOST: string;
  readonly VITE_YOUTUBE_SEARCH_URL: string;
  // more variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
