import { httpClient } from './../../utils/http-client';

export const getItems = async (): Promise<any> => {
  return await httpClient.get('/items');
};
