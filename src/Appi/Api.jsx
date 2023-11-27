
import axios from "axios";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTRlMGMyYmJkNTJjZDAzMzkyNWExYjgxODM5ZTRlNyIsInN1YiI6IjY1NWQxMmJiNTM4NjZlMDBjNWI1Njk5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WyF-b_8sGIA9cdHsnOrzXb55sa3ksoGYwveJJ6XSFvU';
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