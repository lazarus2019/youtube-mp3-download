import React, { useState } from 'react';
import { downloadVideoFromUrl } from '../../utils/download-video-from-url';

import classes from './video-download.module.scss';

export const VideoDownload = () => {
  const [linkVideo, setLinkVideo] = useState('');

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
          onClick={async () =>
            await downloadVideoFromUrl(linkVideo, 'video_title')
          }
        >
          Download video from url
        </button>
      </div>
    </section>
  );
};
