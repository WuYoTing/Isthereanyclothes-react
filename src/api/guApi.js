import axios from 'axios';

// Gu 男生 domain
const guMan = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 30000
});

// Gu 女生 domain
const guWoman = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 30000
});

// Gu other domain
const guOther = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 30000
});

// Gu 男生 path
export const apiGuManAll = () => guMan.get('/api/gu/man/all');
export const apiGuManPricedown = () => guMan.get('/api/gu/man/pricedown');
export const apiGuManLimitedtime = () => guMan.get('/api/gu/man/limitedtime');
export const apiGuManOnlineonly = () => guMan.get('/api/gu/man/onlineonly');
export const apiGuManNewgood = () => guMan.get('/api/gu/man/newgood');
//Gu 女生 path
export const apiGuWomanAll = () => guWoman.get('/api/gu/woman/all');
export const apiGuWomanPricedown = () => guWoman.get('/api/gu/woman/pricedown');
export const apiGuWomanLimitedtime = () => guWoman.get('/api/gu/woman/limitedtime');
export const apiGuWomanOnlineonly = () => guWoman.get('/api/gu/woman/onlineonly');
export const apiGuWomanNewgood = () => guWoman.get('/api/gu/woman/newgood');
//Gu 其他
export const apiGuSearch = prodNumber => guOther.get('/api/gu/goods/'+prodNumber);





