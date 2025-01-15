import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState (null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch (err) {
                console.log(err);
                setError('failed to load movies ...')
                
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    // const movies = [
    //     {id:1, title: 'john wick', release_date: '2020'},
    //     {id:2, title: 'terminator', release_date: '2023'},
    //     {id:3, title: 'power', release_date: '2012'},
    //     {id:4, title: 'beauty', release_date: '2016'},
    // ];

    const handlesearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return 
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch (err){
            console.log(err);
            setError('Failed to search movies...')
        } finally {
            setLoading(true)
        }
        setSearchQuery('')
    }
  return (
    <div>
        <form onSubmit={handlesearch}>
            <input type='text' 
            placeholder='search for movies ...' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
        {error && <div style={{margin:'12px'}}>{error}</div>}

        {loading ? (<div>Loading...</div>):
        (<div>
            {
                movies.map (movie => (
                <MovieCard movie = {movie} key={movie.id}/>))
            }
            {/* {
                movies.map (movie => (
                movie.title.toLowerCase().includes(searchQuery) && (<MovieCard movie = {movie} key={movie.id}/>)))
            } */}
        </div>)
    }
    </div>
  )
}

export default Home