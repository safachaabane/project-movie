import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movieList}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
 
            {movieList.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}

        </div>
    )
}

export default MovieList
