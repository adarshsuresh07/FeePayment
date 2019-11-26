const TOKEN_KEY = 'jwt';
export const logins = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const logouts = () => {
  localStorage.removeItem(TOKEN_KEY);
}
export const isLogins = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
}
export const getTokens = () => {
  let token = localStorage.getItem(TOKEN_KEY);
  return token;
}

const TOKEN_KEYA = 'jwt1';

export const logina = (token) => {
  localStorage.setItem(TOKEN_KEYA, token);
}

export const logouta = () => {
  localStorage.removeItem(TOKEN_KEYA);
}

export const isLogina = () => {
  if (localStorage.getItem(TOKEN_KEYA)) {
    return true;
  }

  return false;
}

export const getTokena = () => {
  let token = localStorage.getItem(TOKEN_KEYA);
  return token;
}