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

export const downloadVideoWithRequest = async (videoLink) => {
  return fetch(videoLink, {
    method: 'GET',
  })
    .then((data) => data.blob())
    .then((response) => jsDownload(response, 'video_title.mp4'));
};

export const jsDownload = (
  data: Blob,
  filename: string,
  mime?: string
): boolean | NodeJS.Timeout => {
  const blobData = [data];
  const blob = new Blob(blobData, {
    type: mime || 'application/octet-stream',
  });

  if (
    typeof (window as unknown as WindowDownloaderEmbedded).navigator
      .msSaveBlob !== 'undefined'
  ) {
    return (window as unknown as WindowDownloaderEmbedded).navigator.msSaveBlob(
      blob,
      filename
    );
  }

  const blobURL =
    window.URL && window.URL.createObjectURL
      ? window.URL.createObjectURL(blob)
      : window.webkitURL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = blobURL;
  tempLink.setAttribute('download', filename);

  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank');
  }

  document.body.appendChild(tempLink);
  tempLink.click();

  return setTimeout(() => {
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  }, 200);
};

export const handleDownload = async (
  downloadUrl,
  filename,
  timeout = 0,
  overrideOptions = {}
) => {
  const fetchController = new AbortController();
  //   const timeoutId = setTimeout(() => {
  //     if (timeout > 0) fetchController.abort();
  //   }, timeout);

  return fetch(downloadUrl, {
    method: 'GET',
    ...overrideOptions,
    signal: fetchController.signal,
  })
    .then((data) => {
      return data.blob();
    })
    .then((response) => jsDownload(response, filename));
};
