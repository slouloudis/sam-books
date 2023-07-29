import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './MovieCard.css'

export default function MovieCard({movies}) {
   //use to update moives being displayed
  return (
    <div className='gallery-main-flex'>
      {movies.map((movie, index) => {
        return (
          <div key={index} className='card--container--glass'>
            <div className='flex--container--card'>
            <h3 className='card--header-stylish'>{movie.name}</h3>
            <img src={movie.img_url}/>
            <p className='txt-500-regular'>Director: {movie.director}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
