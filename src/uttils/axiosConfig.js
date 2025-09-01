export const base_url = "http://127.0.0.1:8000/api/" 


export const gettokenfromlocalstorage = localStorage.getItem('customer') 
    ? JSON.parse(localStorage.getItem('customer'))
    : null;

export const config = {
    headers : {
        Authorization: `Bearer ${
            gettokenfromlocalstorage !== null ? gettokenfromlocalstorage.token : "" 
        }`,
        accept : "application/json", 
    }
};