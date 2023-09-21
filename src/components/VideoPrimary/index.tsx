import { IVideoDetail } from '../../types';

import classNames from './styles.module.scss';

export const VideoPrimary = ({ video }: { video: IVideoDetail }) => {
  const handleConvert = () => {};

  return (
    <div className={classNames.container}>
      <div className={classNames.video}>
        <div className={classNames.thumbnail}>
          <img src={video.thumbnail} alt={video.title} />
        </div>
        <p className={classNames.title}>{video.title}</p>
      </div>

      <div className={classNames.control}>
        <button type="button" onClick={handleConvert}>
          Chuyển đổi thành MP3
        </button>
      </div>
    </div>
  );
};
