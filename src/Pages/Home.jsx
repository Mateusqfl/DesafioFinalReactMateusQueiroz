import React,{useEffect,useState} from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import MovieList from '../Components/MovieList'
import { MainCnt } from '../Assets/Styles/GlobalStyle'
import { getPoularMovies } from '../Assets/services/MovieApi';
import bgheader from "../Assets/images/movie.PNG"




export default function Home() {

  const fetchMoviesPopular = async()=> {
    const {data} = await getPoularMovies()
    setMoviesP(data.results)
  }

  const [MoviesP, setMoviesP] = useState([])

  useEffect(() => {
    fetchMoviesPopular()    
  }, [])
  
 
  return (
    <>
    <MainCnt>
      <Header pagetitle={'Home'} bg={bgheader}></Header>
      <MovieList movies={MoviesP} title="Filmes Populares"></MovieList>
      <Footer></Footer>
      </MainCnt>
    </>
    
  )
}
