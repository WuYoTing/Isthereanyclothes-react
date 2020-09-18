import axios from 'axios';

// Uniqlo 男生 domain
const uniqloMan = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 30000
});

// Uniqlo 女生 domain
const uniqloWoman = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 30000
});

// Uniqlo other domain
const uniqloOther = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 30000
});

// Uniqlo 男生 path
export const apiUniqloManAll = () => uniqloMan.get('/api/uniqlo/man/all');
export const apiUniqloManPricedown = () => uniqloMan.get('/api/uniqlo/man/pricedown');
export const apiUniqloManLimitedtime = () => uniqloMan.get('/api/uniqlo/man/limitedtime');
export const apiUniqloManOnlineonly = () => uniqloMan.get('/api/uniqlo/man/onlineonly');
export const apiUniqloManNewgood = () => uniqloMan.get('/api/uniqlo/man/newgood');
//Uniqlo 女生 path
export const apiUniqloWomanAll = () => uniqloWoman.get('/api/uniqlo/woman/all');
export const apiUniqloWomanPricedown = () => uniqloWoman.get('/api/uniqlo/woman/pricedown');
export const apiUniqloWomanLimitedtime = () => uniqloWoman.get('/api/uniqlo/woman/limitedtime');
export const apiUniqloWomanOnlineonly = () => uniqloWoman.get('/api/uniqlo/woman/onlineonly');
export const apiUniqloWomanNewgood = () => uniqloWoman.get('/api/uniqlo/woman/newgood');
//Uniqlo 其他
export const apiUniqloSearch = prodNumber => uniqloOther.get('/api/uniqlo/goods/' + prodNumber);




