import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { youtube_parser, getListVideoLinks } from './utils';
import { searchVideoApi } from './apis/searchVideo.api';
import {
  defaultSearchParams,
  Y2Mate_linkDownload,
  API_linkDownload,
} from './const';
import { MP3_API_KEY, SEARCH_API_KEY } from './apis/configs';
import queryString from 'query-string';

function App() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const [urlVideoResult, setUrlVideoResult] = useState(null);
  const [linkDownloads, setLinkDownloads] = useState();
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
        'X-RapidAPI-Key': '9e7b682274msh39883b41d81747ap1d7ab0jsnac87b06d469a',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
      },
    };

    const optionsVideoDownload = {
      method: 'GET',
      url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
      params: { id: youtubeID },
      headers: {
        'X-RapidAPI-Key': '9e7b682274msh39883b41d81747ap1d7ab0jsnac87b06d469a',
        'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com',
      },
    };

    handleDownloadVideo(optionsVideoDownload);

    axios(options)
      .then((res) => {
        setUrlResult(res.data.link);
        setVideoTitle(res.data.title);
      })
      .catch((err) => {
        const message = err.response.data.message;
        alert('Có lỗi xãy ra, xin thử lại');
        console.log(message, '2');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleDownloadVideo = (options) => {
    axios(options)
      .then((res) => {
        const { formats, title } = res.data;
        const downloadLinks = getListVideoLinks(formats, title);
        console.log({ formats, downloadLinks });
        setLinkDownloads(downloadLinks);
        // setUrlVideoResult(res.data.link);
      })
      .catch((err) => {
        // const message = err.response.data.message;
        // alert('Có lỗi xãy ra, xin thử lại');
        // console.log(message, '2');
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

  const handleFetchingData = () => {
    searchVideoApi.searchVideo({
      ...defaultSearchParams,
      keyword: 'juice wrld',
    });
  };

  // const y2MateURL = new URL(Y2Mate_linkDownload);
  // const y2MateParams = queryString.parse(y2MateURL.search);

  // const APIMateURL = new URL(API_linkDownload);
  // const APIMateParams = queryString.parse(APIMateURL.search);

  // console.log({ y2MateParams, APIMateParams });

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

          {urlResult || urlVideoResult ? (
            <>
              <p className="video_title">Tiêu đề video: {videoTitle}</p>

              <p className="download_quote">
                Chuyển đổi hoàn tất, hãy nhấn tải về
              </p>
              <div className="btn_container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={urlResult}
                  className="download_btn"
                >
                  Tải về âm thanh
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={urlVideoResult}
                  className="download_btn"
                >
                  Tải về video
                </a>
              </div>
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

      {linkDownloads &&
        linkDownloads.map((link) => (
          <a
            key={link.itag}
            target="_blank"
            rel="noreferrer"
            href={link.url}
            className="download_btn"
          >
            Tải về video {link.quality}
          </a>
        ))}

      {/* <section>
        <button onClick={handleFetchingData}>Test fetching data</button>
      </section> */}
    </div>
  );
}

export default App;
