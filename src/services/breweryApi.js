import { get } from './request';
const API_KEY = '37db54f6937fb888a293d0026987152a';
const API_QUERY = `key=${API_KEY}`;
const BASE_URL = 'https://sandbox-api.brewerydb.com/v2/';
const ENDPOINT = 'beers';
const EVERYTHING_URL = `${BASE_URL}${ENDPOINT}/?${API_QUERY}`;

export const getUrl = url => {
    const json = window.localStorage.getItem(url);
    if(json) {
        const response = JSON.parse(json);
        return Promise.resolve(response);
    }
    return get(url)
        .then(response => {
            window.localStorage.setItem(url, JSON.stringify(response));
            return response;
        });

};

export function search({ search }, { page }) {
    const searchTerm = `&s=${search}`;
    const paging = `&page=${page}`;

    return get(`${EVERYTHING_URL}&${searchTerm}${paging}`);
}

export function getBeers(id) {
    if(id){
        return getUrl(`${EVERYTHING_URL}&i=${id}`);
    }
    else {
        return getUrl(EVERYTHING_URL);
    }
}