import axios from 'axios';

let instanse = axios.create({
    withCredentials: true,
      baseURL: ' https://jsonplaceholder.typicode.com/'
});

export const photosAPI = {
    getPhotos() {
        return instanse.get(`photos`)
         .then(res => ({
             firstCol: res.data.slice(0,4),
            secondCol: res.data.slice(5,9), 
            thirdCol: res.data.slice(10,14), 
            fourthCol: res.data.slice(15,19),}));
     },
}