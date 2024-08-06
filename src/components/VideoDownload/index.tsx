import React, { useState } from 'react';
import {
  downloadVideoFromUrl,
  downloadVideoWithRequest,
} from '../../utils/download-video-from-url';

import classes from './video-download.module.scss';
import useDownloader from 'react-use-downloader';
import { handleDownload } from '../../hooks/useDownloadMinimal';

export const VideoDownload = () => {
  const [linkVideo, setLinkVideo] = useState('');

  const { download, error } = useDownloader();

  return (
    <section className={classes['facebook-download-video']}>
      <h2 className={classes['facebook-video-heading']}>Tải video từ URL</h2>

      <div className={classes['facebook-wrapper']}>
        <input
          className={classes['facebook-video-input']}
          type="text"
          value={linkVideo}
          onChange={(e) => setLinkVideo(e.target.value)}
          placeholder="Paste URL video"
        />
        <button
          className={classes['facebook-video-download']}
          // onClick={async () =>
          //   await downloadVideoFromUrl(linkVideo, 'video_title')
          // }
          onClick={() => handleDownload(linkVideo, 'video_title.mp4')}
        >
          Download video from url
        </button>
      </div>

      {error && <p>{JSON.stringify(error)}</p>}
    </section>
  );
};
