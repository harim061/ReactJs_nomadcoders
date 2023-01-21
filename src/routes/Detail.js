import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){

    const {id} = useParams()
    const [movieDetail,setMovieDetail] = useState({});
    const getMovie= async()=>{
        const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()

        setMovieDetail(json.data.movie)
    
    }
    console.log("this>",movieDetail)

    useEffect(()=>{
        getMovie();
    },[])

    return(
        <div>
        <h1>Detail</h1>

        <p>{movieDetail.title}</p>
        <img src={movieDetail.medium_cover_image}></img>

        <p>{movieDetail.year}</p>

        <p>
            {movieDetail.genres && 
                movieDetail.genres.map((genres)=>
                <li key={genres}>{genres}</li>
                )
            }
        </p>
        </div>
    )
}

export default Detail;