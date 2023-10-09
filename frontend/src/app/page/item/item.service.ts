import { httpClient } from './../../utils/http-client';

export const getItems = async (): Promise<any> => {
  return await httpClient.get('/items');
};
export const addItems = async (data: any): Promise<any> => {
  return await httpClient.post('/items', data);
};
