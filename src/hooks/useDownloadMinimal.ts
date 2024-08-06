// https://github.com/the-bugging/react-use-downloader/blob/develop/src/index.ts

import { WindowDownloaderEmbedded } from './types';

/**
 * jsDownload function to handle the download process.
 * @param {Blob} data
 * @param {string} filename
 * @param {string} mime
 * @returns {boolean | NodeJS.Timeout}
 */
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
