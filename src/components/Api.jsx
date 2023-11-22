

import axios from "axios";

const API_KEY = 'f54e0c2bbd52cd033925a1b81839e4e7';
const baseURL = 'https://api.themoviedb.org/3/';

const api = axios.create({
    baseURL,
    method: 'POST',
    params: {
        language: 'en-US',
    },
    headers: { Authorization: `Bearer ${API_KEY}` },
})

export async function getTrending() {
    const response = await api.get(`trending/movie/day`);
    return response.data.results;
}

export async function getSearch(query) {
    const response = await api.get(`search/movie`, { params: { query } });
    return response.data;
}

export async function getMovie(id) {
    const response = await api.get(`movie/${id}`);
    return response.data;
}

export async function getMovieCredits(id) {
    const response = await api.get(`movie/${id}/credits`);
    return response.data;
}
export async function getMovieReviews(id) {
    const response = await api.get(`movie/${id}/reviews`);
    return response.data;
}