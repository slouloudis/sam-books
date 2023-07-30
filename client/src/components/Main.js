import React, {useState, useEffect} from 'react'
import MovieCard from './Cards/MovieCard'
import axios from 'axios'
import Form from './Form/Form'

export default function Main() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getMovies()
  }, [])

  
  // get movies
  async function getMovies() {
    let API = 'http://localhost:2000/movies'
    const res = await axios.get(API);
    console.log(res.data)
    setMovies(res.data)
  }

  // delete movie
  const handleDelete = async (id) => {
    console.log('clicked')
    const res = await axios.delete(`http://localhost:2000/movies/${id}`)
    console.log(res)
    getMovies()
  }

  // create movie
  // newMovie is our 'formData' 
  const handleAddMovie = async (newMovie) => {
    const API = 'http://localhost:2000/movies'
    const res = await axios.post(API, newMovie)
    // add new movies 
    console.log(res.data)
    setMovies([...movies, res.data])
  }

  // update moive
  const handleUpdateMovie = async (movie) => {
    await axios.put(`http://localhost:2000/movies/${movie._id}`, movie)
    await getMovies();
  }
    
  return (
    <div>
      <Form onSubmit={handleAddMovie} />
      <MovieCard movies={movies} handleDelete={handleDelete} handleUpdateMovie={handleUpdateMovie}/>
    </div>
  )
}
