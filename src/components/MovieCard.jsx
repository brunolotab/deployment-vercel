import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({ movie }) {

    const { isfavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isfavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
  return (
    <div>
        <div>
            <img src = {`https://image.tmbdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title}/>
            <div>
                <button className={`favorites-btn ${favorite? 'active': ''}`} onClick={onFavoriteClick}>@</button>
            </div>
        </div>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard