import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './MovieCard.css'
import { ReactComponent as Icon } from '../../assets/movie_svg.svg';


export default function MovieCard({movies, handleDelete}) {
   //use to update moives being displayed
  return (
    <div className='gallery-main-flex'>
      {movies.map((movie, index) => {
        return (
          <div key={index} className='card--container--glass'>
            <div className='flex--container--card'>
            <p className='txt-500-regular button--delete' onClick={() => handleDelete(movie._id, movie.name)}>X</p>
            <h3 className='card--header-stylish'>{movie.name}</h3>
            <img src={movie.img_url}/>
            <p className='txt-500-regular '>
              <Icon/>{movie.director}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
