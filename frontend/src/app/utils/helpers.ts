interface AuthResponse {
  expiresIn: string;
  refreshToken: string;
  token: string;
  tokenType: string;
  userInfo: object;
}

const setLocalStorageLogin = (data: AuthResponse) =>
  localStorage.setItem('auth-login', JSON.stringify(data));

const getLocalStorageLogin = () => localStorage.getItem('auth-login');

export { setLocalStorageLogin, getLocalStorageLogin, AuthResponse };
