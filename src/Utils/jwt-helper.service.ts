import decode from 'jwt-decode';

export function isLoggedIn(): boolean {
  const token = getStorageItem('token');
  return !!token && !isTokenExpired(token);
}

export function getStorageItem(key: string) {
  return JSON.parse(localStorage.getItem(key) || '{}');
}

export function setStorageItem(key: string, data: any) {
  return localStorage.setItem(key, data);
}

export function deleteItem(key: string) {
  return localStorage.removeItem(key);
}

export function getToken(token: any) {
  return decode(token);
}

export function isTokenExpired(token: any) {
  try {
    const decoded: any = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    console.log('Token Expired!');
    return false;
  }
}
