import React from 'react'

export default function BookCard({handleDelete}) {

  return (
    <div>
        <h2></h2>
        <img src={'something'}/>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
