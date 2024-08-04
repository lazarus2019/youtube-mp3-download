import axios from 'axios';
import { axiosFacebookClient } from '../apis/axiosClient';
import {
  TFacebookDownload,
  TFacebookDownloadLinkWithTitle,
  TFacebookVideoQuality,
} from '../types';

const availableQuality: TFacebookVideoQuality[] = ['video_hd_0', 'video_sd_0'];

export const getVideoUrl = (
  facebookResponse: TFacebookDownload
): TFacebookDownloadLinkWithTitle[] => {
  return facebookResponse.links
    .filter((downloadLink) => availableQuality.includes(downloadLink.quality))
    .map((link) => ({
      ...link,
      title: facebookResponse.title,
    }));
};

export const getFacebookVideo = async (videoLink: string) => {
  const response = await axiosFacebookClient.get('/smvd/get/all', {
    params: {
      url: videoLink,
    },
  });

  const listLinks = getVideoUrl(response.data);

  // sort to hd at first
  return listLinks.sort((a, b) => a.quality.localeCompare(b.quality));
};

export const downloadVideoFromUrl = async (
  videoLink: string,
  title: string
) => {
  try {
    const response = await fetch(videoLink, {
      method: 'GET',
      cache: 'no-cache',
      mode: 'no-cors',
      redirect: 'follow',
      credentials: 'same-origin',
    });
    const file = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = `${title}.mp4`;
    link.click();
  } catch (error) {
    console.log('downloadVideoFromUrl:::error', error);
  }
};
