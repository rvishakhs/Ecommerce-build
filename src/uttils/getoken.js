export const gettokenfromlocalstorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;