import { IListVideoReq, IListVideoRes } from '../types';
import { axiosSearchClient } from './axiosClient';

const searchAPIPart = {
  getList: '/search',
};

export const searchVideoApi = {
  async searchVideo(params: IListVideoReq) {
    const response = await axiosSearchClient.get<IListVideoRes>(
      searchAPIPart.getList,
      {
        ...params,
        q: params.keyword,
      }
    );

    console.log({ response });
    return response;
  },
};
