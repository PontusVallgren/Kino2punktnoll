import fetch from "node-fetch";
const url = "https://lernia-kino-cms.herokuapp.com/api";
const imdb_url_rate = "https://imdb8.p.rapidapi.com/title/get-ratings?tconst=";
const path = "https://lernia-kino-cms.herokuapp.com/api/screenings/?pagination[pageSize]=100&filters[movie]=";

//fetches IMDB rating of a specific movie.
export async function fetchIMDBRate(imdbId) {
    const res = await fetch(imdb_url_rate + `${imdbId}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "af96dcaadamshc062cb2b3787501p1d32a7jsnc52680263752"
        }
    })
    const payload = await res.json();
    return payload;
}

//fetches all the movies from API
export async function fetchAllMovies() {
    const res = await fetch(url + '/movies');
    const payload = await res.json();
    return payload.data;
}

//fetches a specific movie from API
export async function fetchChosenMovie(id) {
    const res = await fetch(url + `/movies/${id}`);
    const payload = await res.json();
    return payload.data;
}
export async function fetchReviews(movieId) {
    const res = await fetch(url + '/reviews' + `?pagination=1000&filters[movie]=${movieId}`)
    const payload = await res.json();
    return payload.data;
}

//fetches screenings for specific movie from API
export async function screeningsLoad(sId) {
    try {
        const response = await fetch(path + `${sId}`)
        const payload = await response.json();
        // console.log("Stringify:" + JSON.stringify(payload.data));
        return payload.data;
    } catch (error) {
        console.log("oh no 😢");
    }
};

export default {
    fetchAllMovies: fetchAllMovies,
    fetchChosenMovie: fetchChosenMovie,
    fetchReviews: fetchReviews,
    screeningsLoad: screeningsLoad,
    fetchIMDBRate: fetchIMDBRate,
};