import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c418287e8aea7053b5c2eab8c45b88f7";

const withDaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService {
    static getMovies() {
        return axios(withDaseUrl("movie/popular"))
    }

    static getMovieDetails(id) {
        return axios(withDaseUrl(`movie/${id}`))
    }

    static searchMovies(movie) {
        return axios(withDaseUrl("search/movie") + `&query=${movie}`)
    }
}