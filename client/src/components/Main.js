import React, {useState, useEffect} from 'react'
import MovieCard from './Cards/MovieCard'
import axios from 'axios'

export default function Main() {
    const [movies, setMovies] = useState([])

    const [formData, setformData] = useState({
        name: '',
        img_url: '',
        director: '',
        year: '',
    })

    const handleChange = (e) => {
        setformData({...formData, [e.target.name] : e.target.value})
        console.log(formData)
    }

    const handleAddMovie = async (e) => {
        e.preventDefault();
        const API = 'http://localhost:2000/movies'
        const res = await axios.post(API, formData)
        // add new movies 
        console.log(res.data)
        setMovies([...movies, res.data])
    }

    useEffect(() => {
        getMovies()
      }, [])
    
      async function getMovies() {
        let API = 'http://localhost:2000/movies'
        const res = await axios.get(API);
        console.log(res.data)
        setMovies(res.data)
      }
    
  return (
    <div>
        <form onSubmit={handleAddMovie}>
            <input name="name" placeholder='movie name' onChange={handleChange}></input>
            <input name='img_url' placeholder='img url' onChange={handleChange}></input>
            <input name='director' placeholder='director' onChange={handleChange}></input>
            <input name='year' placeholder='year' onChange={handleChange}></input>
            <button type='submit'>Add Movie</button>
        </form>
        <MovieCard movies={movies}/>
    </div>
  )
}
