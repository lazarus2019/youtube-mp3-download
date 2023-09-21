import { AxiosResponse, IListVideoReq, IListVideoRes } from '../types';
import { axiosSearchClient } from './axiosClient';

const searchAPIPart = {
  getList: '/search',
};

export const searchVideoApi = {
  async searchVideo(params: IListVideoReq) {
    const response = await axiosSearchClient.get<AxiosResponse<IListVideoRes>>(
      searchAPIPart.getList,
      {
        params: { ...params, q: params.keyword },
      }
    );

    console.log({ response: response.data });
    return response.data;
  },
};
