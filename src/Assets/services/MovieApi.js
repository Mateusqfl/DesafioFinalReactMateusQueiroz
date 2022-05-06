import axios from "axios";

const apiUrl ='https://api.themoviedb.org/3'
const apiKey = "af5dcb48e4e23d3a88d67153946bddad"

export function getPoularMovies(){
    return axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`)
}

export function getMovieDetail(id){
    return axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}`)

}



