import React, { useEffect, useState } from 'react';
import {
  TFacebookDownloadLink,
  TFacebookDownloadLinkWithTitle,
} from '../../types';
import {
  downloadVideoFromUrl,
  getFacebookVideo,
} from '../../utils/download-video-from-url';

import classes from './facebook-video-download.module.scss';

export const FacebookVideoDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [linkFacebookVideo, setLinkFacebookVideo] = useState('');
  const [downloadLinks, setDownloadLinks] = useState<
    TFacebookDownloadLinkWithTitle[]
  >([]);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const data = await getFacebookVideo(linkFacebookVideo);
      setDownloadLinks(data);
    } catch (error) {
      setIsLoading(false);
      console.log('handleFacebookDownload:::error', error);
    }
  };

  useEffect(() => {
    if (downloadLinks.length > 0) {
      const [link1, link2] = downloadLinks;
      downloadVideoFromUrl(link1.link, link1.title);
    }
    setIsLoading(false);
  }, [downloadLinks]);

  const resetLink = () => {
    setDownloadLinks([]);
    setLinkFacebookVideo('');
  };

  return (
    <section className={classes['facebook-download-video']}>
      <h2 className={classes['facebook-video-heading']}>Tải video facebook</h2>
      <div className={classes['facebook-wrapper']}>
        <input
          className={classes['facebook-video-input']}
          type="text"
          value={linkFacebookVideo}
          onChange={(e) => setLinkFacebookVideo(e.target.value)}
          placeholder="Dán đường dẫn video facebook"
        />
        <button className={classes['facebook-video-reset']} onClick={resetLink}>
          Làm mới
        </button>
      </div>
      <button
        className={classes['facebook-video-download']}
        disabled={isLoading}
        onClick={handleDownload}
      >
        Tải video facebook
      </button>
    </section>
  );
};
