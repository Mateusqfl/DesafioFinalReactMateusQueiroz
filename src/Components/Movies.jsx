import React from 'react'
import { Link } from 'react-router-dom'


export default function Movies({movie=[]}) {

  const getImage = 'https://image.tmdb.org/t/p/w500'

 
  

  return (
    <>
    <Link to={`/movie/${movie.id}`}><img src={`${getImage}${movie.poster_path}`}  alt=""></img> </Link>
    <p>Título: {movie.title}</p>
    <p>Nota: {movie.vote_average}</p>
    </>
  )
}
