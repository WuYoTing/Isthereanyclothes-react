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
const guOther = axios.create({
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
export const apiUniqloWomanAll = () => uniqloMan.get('/api/uniqlo/woman/all');
export const apiUniqloWomanPricedown = () => uniqloMan.get('/api/uniqlo/woman/pricedown');
export const apiUniqloWomanLimitedtime = () => uniqloMan.get('/api/uniqlo/woman/limitedtime');
export const apiUniqloWomanOnlineonly = () => uniqloMan.get('/api/uniqlo/woman/onlineonly');
export const apiUniqloWomanNewgood = () => uniqloMan.get('/api/uniqlo/woman/newgood');
//Uniqlo 其他
export const apiUniqloSearch = () => uniqloMan.get('/api/uniqlo/man/newgood');



