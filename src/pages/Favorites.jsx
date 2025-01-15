import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'

function Favorites() {
    const{favorites} = useMovieContext();

    if (favorites) {
        return (
            <div>
                <h2> Your Favorites movies are here</h2>
            <div>
            {
                favorites.map (movie => (
                <MovieCard movie = {movie} key={movie.id}/>))
            }
            </div>
            </div>
        )
    }
  return (
    <div>
        <h3>No Favorite movies Yet</h3>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites