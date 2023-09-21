export enum EOrderType {
  DATE = 'date',
  RELATE = 'relevance',
  RATE = 'rating',
  VIEW = 'views',
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
}

export interface IVideoRes {
  id: string;
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnail: IThumbnails;
}

export interface IVideoDetail extends Omit<IVideoRes, 'thumbnail'> {
  thumbnail: string;
}

export interface IListVideoRes {
  nextPageToken: string;
  items: IVideoRes[];
}

export interface AxiosResponse<T> {
  data: T[];
  status: number;
  statusText: string;
}

export interface IListVideoReq {
  keyword: string;
  regionCode?: string;
  maxResults?: number;
  order?: EOrderType;
  pageToken?: string;
  part: string;
}
