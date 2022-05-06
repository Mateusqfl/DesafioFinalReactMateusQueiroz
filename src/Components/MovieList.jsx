import React from 'react'
import { MainContainer, MainUl,StCntMovie } from '../Assets/Styles/ListMovieStyle'
import Movies from './Movies'


export default function MovieList({title="titulo",movies="filme"}) {




  return (<>

  <MainContainer>
    <h1>{title}</h1>
    
      <MainUl>


{ 

    movies.map( movie => (<StCntMovie>
        <p key={movie.id}></p>
        <Movies movie={movie}></Movies>
        
      </StCntMovie>
      ))
}
</MainUl>
</MainContainer> 
</>
  )}

