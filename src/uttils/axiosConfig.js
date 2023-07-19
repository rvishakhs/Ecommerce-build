export const base_url = "http://localhost:4005/api/" 


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