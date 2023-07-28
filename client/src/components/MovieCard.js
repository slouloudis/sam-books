import React from 'react'

export default function MovieCard({handleDelete}) {

  return (
    <div>
        <h2>Name</h2>
        <p>Director</p>
        <img src={'something'}/>
        <h4>Is good </h4>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
