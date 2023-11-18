import axios from 'axios';
import { useRef, useState } from 'react';
import { youtube_parser } from './utils/youtube_parser';
import { MP3_API_KEY, SEARCH_API_KEY } from './apis/configs';
import { SearchPage } from './pages/SearchPage';

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const key = import.meta.env.VITE_RAPID_API_KEY;
  console.log({ MP3_API_KEY, SEARCH_API_KEY, key });

  const handleSubmit = (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    if (!youtubeID) {
      alert('Đường dẫn không hợp lệ, vui lòng nhập lại');
      return;
    }
    setIsLoading(true);

    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: youtubeID },
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
      },
    };

    axios(options)
      .then((res) => {
        setUrlResult(res.data.link);
        setVideoTitle(res.data.title);
      })
      .catch((err) => {
        alert('Có lỗi xãy ra, xin thử lại');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleResetInput = () => {
    inputUrlRef.current.value = '';
    setUrlResult(undefined);
    setIsLoading(false);
  };

  return (
    <div className="app">
      <section className="content">
        <h1 className="content_title">
          Chuyển đổi video Youtube thành nhạc (MP3)
        </h1>

        <form onSubmit={handleSubmit} className="form">
          <div>
            <input
              ref={inputUrlRef}
              placeholder="Dán đường dẫn youtube vào đây..."
              className="form_input"
              type="text"
            />
            <button
              type="button"
              className={`form_button reset_button`}
              onClick={handleResetInput}
            >
              Làm mới
            </button>
          </div>

          {urlResult ? (
            <>
              <p className="video_title">Tiêu đề video: {videoTitle}</p>

              <p className="download_quote">
                Chuyển đổi hoàn tất, hãy nhấn tải về
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href={urlResult}
                className="download_btn"
              >
                Tải về
              </a>
            </>
          ) : (
            <button
              type="submit"
              className={`form_button ${isLoading && 'disabled'}`}
              disabled={isLoading}
            >
              Chuyển đổi
            </button>
          )}
        </form>
      </section>

      <SearchPage />
    </div>
  );
}

export default App;
