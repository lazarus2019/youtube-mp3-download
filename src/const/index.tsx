import { IListVideoReq } from '../types';

export const defaultSearchParams: IListVideoReq = {
  keyword: '',
  regionCode: 'VI',
  maxResults: 20,
  order: EOrderType.RELATE,
};

export enum EOrderType {
  DATE = 'date',
  RELATE = 'relevance',
  RATE = 'rating',
  VIEW = 'views',
}
