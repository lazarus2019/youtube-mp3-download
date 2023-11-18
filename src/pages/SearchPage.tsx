import { useState } from 'react';
import { searchVideoApi } from '../apis/searchVideo.api';
import { defaultSearchParams } from '../const';
import React from 'react';
import { IListVideoRes } from '../types';
import { VideoItem } from '../components/VideoItem';
import classNames from './styles.module.scss';
import { mockData } from '../data';

export const SearchPage = () => {
  const [data, setData] = useState<IListVideoRes>(mockData);

  // const handleFetchingData = async () => {
  //   const data = await searchVideoApi.searchVideo({
  //     ...defaultSearchParams,
  //     keyword: 'juice wrld',
  //   });

  //   setData(data);
  // };0  

  console.log({ data });

  return (
    <div>
      {/* <section>
        <button onClick={handleFetchingData}>Test fetching data</button>
      </section> */}

      <div className={classNames['video-list']}>
        {data?.items.map((video) => (
          <VideoItem
            video={{
              id: video.id.videoId,
              publishedAt: video.snippet.publishedAt,
              channelId: video.snippet.channelId,
              title: video.snippet.title,
              description: video.snippet.description,
              channelTitle: video.snippet.channelTitle,
              thumbnail: video.snippet.thumbnails.medium.url,
            }}
          />
        ))}
      </div>
    </div>
  );
};
