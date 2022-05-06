import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetail } from '../Assets/services/MovieApi'
import { DetailImg, DetailMovie, Divflex } from '../Assets/Styles/DetailMovieStyle'
import { MainCnt } from '../Assets/Styles/GlobalStyle'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'


export default function Detail() {
    let {movieId} = useParams();
    let navigate = useNavigate();




    const [MovieDetail, setMovieDetail] = useState([]);

    const fetchMovie = async()=> {
        const {data} = await getMovieDetail(movieId)
        console.log(data)
        setMovieDetail(data)
      }
    
    
      useEffect(() => {
        fetchMovie()    
      }, [])

      const getImage = 'https://image.tmdb.org/t/p/w500'
    
    return (
   <>
   <MainCnt>
    <Header pagetitle={MovieDetail.title} bg="" />
        <Divflex>
            
        <DetailImg src={`${getImage}${MovieDetail.poster_path}`}  alt="">
    
        </DetailImg>
        <DetailMovie>
        <p><b>Titulo: </b>{MovieDetail.title}</p> 
        <p><b>Sinopse: </b>{MovieDetail.overview}</p> 
        <p><b>Lançamento: </b>{MovieDetail.release_date}</p> 
        <p><b>Nota: </b>{MovieDetail.vote_average}</p> 
        <button onClick={() => navigate("/")}>Home</button>
        </DetailMovie>
        </Divflex>
    <Footer></Footer>
    </MainCnt>
   </>
  )
}
