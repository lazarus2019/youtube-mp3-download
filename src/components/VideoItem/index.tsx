import { IVideoDetail } from '../../types';

import classNames from './styles.module.scss';

export const VideoItem = ({ video }: { video: IVideoDetail }) => {
  return (
    <div className={classNames.container}>
      <div className={classNames.thumbnail}>
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <p className={classNames.title}>{video.title}</p>
    </div>
  );
};
