import { AuthLogin } from './login.model';
import { httpClient } from './../../utils/http-client';

export const authLogin = async (data: AuthLogin): Promise<any> => {
  return await httpClient.post('/users/login', data);
};
