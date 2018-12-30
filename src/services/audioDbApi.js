import { get } from './request';
const API_KEY = '195003';
const API_QUERY = 'searchalbum.php?s=';
const BASE_URL = 'theaudiodb.com/api/v1/json/';
// const ARTIST = 'u2';
const EVERYTHING_URL = `${BASE_URL}${API_KEY}/${API_QUERY}`;

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

export function getArtistDetails(name) {
    if(name){
        return getUrl(`${EVERYTHING_URL}${name}`);
    }
    else {
        return getUrl(EVERYTHING_URL);
    }
}