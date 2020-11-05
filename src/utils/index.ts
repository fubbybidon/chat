export const getParamsFromUrl = (path: string) => {
  return new URL(path, 'http://ru.ru').searchParams;
};



export const setToken = (token) => {
localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const removeToken = () => {
  localStorage.removeItem('token')
}