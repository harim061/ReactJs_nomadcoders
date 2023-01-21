import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({coverImg,title,summary,genres,id}){
    return(
            <div>
            <img src={coverImg}></img>
                <h2>
                    <Link to={`/movie/${id}`}>{title}
                </Link>
                </h2>
                <p>{summary}</p>
                <p>
                    {genres.map((g)=>
                    <li key={g}>
                    {g}</li>)}
                </p>
            </div>
    )
}

Movie.propTypes={
    coverImg : PropTypes.string.isRequired,
    title :PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    id:PropTypes.number.isRequired
}

export default Movie;