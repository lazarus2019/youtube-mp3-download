import { EOrderType, IListVideoReq } from '../types';

export const defaultSearchParams: IListVideoReq = {
  keyword: '',
  regionCode: 'VI',
  maxResults: 20,
  order: EOrderType.RELATE,
  part: 'snippet,id',
};
