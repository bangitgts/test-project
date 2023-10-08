interface AuthResponse {
  expiresIn: string;
  refreshToken: string;
  token: string;
  tokenType: string;
  userInfo: object;
}

const setLocalStorageLogin = (data: AuthResponse) =>
  localStorage.setItem('auth-login', JSON.stringify(data));

export { setLocalStorageLogin, AuthResponse };
