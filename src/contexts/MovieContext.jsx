import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(()=> {
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addToFavorties = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorties = (movieid) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieid))
    }

    const isFavorties = (movieid) => {
        return favorites.some(movie => movie.id === movieid)
    }

    const value = [
        favorites,
        addToFavorties,
        removeFromFavorties,
        isFavorties
    ]

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

