import { EOrderType, IListVideoReq } from '../types';

export const defaultSearchParams: IListVideoReq = {
  keyword: '',
  regionCode: 'VI',
  maxResults: 20,
  order: EOrderType.RELATE,
  part: 'snippet,id',
};

export const VIDEO_QUALITY = ['hd720', 'large'];

export const API_linkDownload =
  'https://rr3---sn-4g5edndd.googlevideo.com/videoplayback?expire=1700859546&ei=OrpgZd-MBKWDi9oP-KGRGA&ip=49.12.104.180&id=o-AGI2tdWd5HaeD_siKbWyqs6g5N2OKgQ2A8ahRqfQNsCz&itag=136&source=youtube&requiressl=yes&mh=s6&mm=31%2C26&mn=sn-4g5edndd%2Csn-f5f7lnld&ms=au%2Conr&mv=m&mvi=3&pl=19&pcm2=yes&initcwndbps=463750&spc=UWF9fzDKg0sZw1n_3-S0R1r-6P937gY&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=34821115&dur=176.676&lmt=1674487048269056&mt=1700837586&fvip=3&keepalive=yes&fexp=24007246&c=ANDROID&txp=6216224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=ANLwegAwRQIgQEYCttiuGifB8pT8ED9IxvJVGiOXSNZjD9THxg-qbwwCIQDB-1rIj9ZINqYALjNTx0dACo7aumjxOAyHhxKRDMPUkQ%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AM8Gb2swRQIgKNze8Ighe6JBw_uNyn7WCOnkqz6MbluOvPROOQvc_FwCIQC_ViQhXHh-PSj1XM70I3K0ctxKt9wCpN1XboxNTH__Aw%3D%3D';
export const Y2Mate_linkDownload =
  'https://rr3---sn-4g5e6nzz.googlevideo.com/videoplayback?expire=1700859833&ei=WbtgZaDzC4WSi9oP5Ou-6Ac&ip=2a01%3A4f8%3A242%3A449f%3A%3A2&id=o-AAjbk7rUXTujwT4btqmynrx38eJGKMJaArT4Z5bKBKHF&itag=22&source=youtube&requiressl=yes&mh=s6&mm=31%2C26&mn=sn-4g5e6nzz%2Csn-f5f7kn7z&ms=au%2Conr&mv=m&mvi=3&pl=44&initcwndbps=447500&spc=UWF9f5xEd3A6JxsDBdWtHjwDuNBW_3Y&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=176.727&lmt=1674487056155000&mt=1700838066&fvip=2&fexp=24007246&c=ANDROID&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=ANLwegAwRAIgD06_6j6RMgahP0W4lwQnIOpH9kP9vmE1uM1_ZVw8xmQCIFDqev7Jx-880HT_H7mEkRJkgNCsZXjJiu4EOPejb3EJ&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AM8Gb2swRAIgTBk9Qz2MaC_bqZujZ8sKTUo2p1MEUxayiRNYY7PoKXcCICLYMr9HMppT8KwqKl-RH4g0tQWIZg2yj5XLj2MmYDUb&title=E5+ft+Mc+Goku+-+DRUG+DREAMS';


  export const API_params = {
    c: 'ANDROID',
    clen: '34821115',
    dur: '176.676',
    ei: 'OrpgZd-MBKWDi9oP-KGRGA',
    expire: '1700859546',
    fexp: '24007246',
    fvip: '3',
    gir: 'yes',
    id: 'o-AGI2tdWd5HaeD_siKbWyqs6g5N2OKgQ2A8ahRqfQNsCz',
    initcwndbps: '463750',
    ip: '49.12.104.180',
    itag: '136',
    keepalive: 'yes',
    lmt: '1674487048269056',
    lsig: 'AM8Gb2swRQIgKNze8Ighe6JBw_uNyn7WCOnkqz6MbluOvPROOQvc_FwCIQC_ViQhXHh-PSj1XM70I3K0ctxKt9wCpN1XboxNTH__Aw==',
    lsparams: 'mh,mm,mn,ms,mv,mvi,pl,initcwndbps',
    mh: 's6',
    mime: 'video/mp4',
    mm: '31,26',
    mn: 'sn-4g5edndd,sn-f5f7lnld',
    ms: 'au,onr',
    mt: '1700837586',
    mv: 'm',
    mvi: '3',
    pcm2: 'yes',
    pl: '19',
    requiressl: 'yes',
    sig: 'ANLwegAwRQIgQEYCttiuGifB8pT8ED9IxvJVGiOXSNZjD9THxg-qbwwCIQDB-1rIj9ZINqYALjNTx0dACo7aumjxOAyHhxKRDMPUkQ==',
    source: 'youtube',
    sparams:
      'expire,ei,ip,id,itag,source,requiressl,pcm2,spc,vprv,svpuc,mime,gir,clen,dur,lmt',
    spc: 'UWF9fzDKg0sZw1n_3-S0R1r-6P937gY',
    svpuc: '1',
    txp: '6216224',
    vprv: '1',
  };

  export const Y2mate_params = {
    c: 'ANDROID',
    cnr: '14',
    dur: '176.727',
    ei: 'WbtgZaDzC4WSi9oP5Ou-6Ac',
    expire: '1700859833',
    fexp: '24007246',
    fvip: '2',
    id: 'o-AAjbk7rUXTujwT4btqmynrx38eJGKMJaArT4Z5bKBKHF',
    initcwndbps: '447500',
    ip: '2a01:4f8:242:449f::2',
    itag: '22',
    lmt: '1674487056155000',
    lsig: 'AM8Gb2swRAIgTBk9Qz2MaC_bqZujZ8sKTUo2p1MEUxayiRNYY7PoKXcCICLYMr9HMppT8KwqKl-RH4g0tQWIZg2yj5XLj2MmYDUb',
    lsparams: 'mh,mm,mn,ms,mv,mvi,pl,initcwndbps',
    mh: 's6',
    mime: 'video/mp4',
    mm: '31,26',
    mn: 'sn-4g5e6nzz,sn-f5f7kn7z',
    ms: 'au,onr',
    mt: '1700838066',
    mv: 'm',
    mvi: '3',
    pl: '44',
    ratebypass: 'yes',
    requiressl: 'yes',
    sig: 'ANLwegAwRAIgD06_6j6RMgahP0W4lwQnIOpH9kP9vmE1uM1_ZVw8xmQCIFDqev7Jx-880HT_H7mEkRJkgNCsZXjJiu4EOPejb3EJ',
    source: 'youtube',
    sparams:
      'expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,cnr,ratebypass,dur,lmt',
    spc: 'UWF9f5xEd3A6JxsDBdWtHjwDuNBW_3Y',
    svpuc: '1',
    title: 'E5 ft Mc Goku - DRUG DREAMS',
    txp: '6211224',
    vprv: '1',
  };