import queryString from 'query-string';
import { VIDEO_QUALITY } from '../const';

export const youtube_parser = (url) => {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

export const getListVideoLinks = (array, title) => {
  const titleStringtify = queryString.stringify({ title });
  const links = array
    .filter((item) => VIDEO_QUALITY.includes(item.quality))
    .map((item) => ({ ...item, url: item.url + '&' + titleStringtify }));

  return links;
};

// {
//     "itag": 313,
//     "url": "https://rr1---sn-4g5edns7.googlevideo.com/videoplayback?expire=1700296416&ei=gCJYZYqwHLKXi9oPh7-tmAw&ip=2a0f%3A4a01%3Af387%3A11b6%3A8730%3Ae73d%3Acc94%3Adc9c&id=o-AEOeeNcY8ykqDlqYyXUEzEqmCyItO_AtP5m4aLrh1vWI&itag=313&source=youtube&requiressl=yes&mh=wM&mm=31%2C26&mn=sn-4g5edns7%2Csn-2gb7sne6&ms=au%2Conr&mv=m&mvi=1&pl=29&pcm2=no&initcwndbps=1880000&spc=UWF9f2vTnTurxGZjLLLMZl37oEMelo8&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=428753421&dur=233.000&lmt=1695288389463038&mt=1700274561&fvip=5&keepalive=yes&fexp=24007246&beids=24350018&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ANLwegAwRAIgCDNkdtZ04ZGRaAUbuJ-Yc71SewwSZZ0mAIR3WptN76gCIGaYVnmqMoUJ7ojToKPYIePZXGn0j5t-42MnpenmiLRy&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AM8Gb2swRQIhAJROYj9OCrpnPI73kyflwwGLgNC8eQ7R-jvRAOC_z4bVAiBL_OKbriLgAu3n5Zg2Z4VPmwj0Y2Z0EJvBhTxgY9zOSA%3D%3D",
//     "mimeType": "video/webm; codecs=\"vp9\"",
//     "bitrate": 17708577,
//     "width": 3840,
//     "height": 2160,
//     "initRange": {
//         "start": "0",
//         "end": "219"
//     },
//     "indexRange": {
//         "start": "220",
//         "end": "1017"
//     },
//     "lastModified": "1695288389463038",
//     "contentLength": "428753421",
//     "quality": "hd2160",
//     "fps": 25,
//     "qualityLabel": "2160p",
//     "projectionType": "RECTANGULAR",
//     "averageBitrate": 14721147,
//     "colorInfo": {
//         "primaries": "COLOR_PRIMARIES_BT709",
//         "transferCharacteristics": "COLOR_TRANSFER_CHARACTERISTICS_BT709",
//         "matrixCoefficients": "COLOR_MATRIX_COEFFICIENTS_BT709"
//     },
//     "approxDurationMs": "233000"
// }
