import React, {useState }from 'react'
import axios from 'axios'

export default function Form({onSubmit, movie}) {
  const [formData, setFormData] = useState(movie ?? {
    name: '',
    img_url: '',
    director: '',
    year: '',
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    console.log(formData)
  }

  const submit = event => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input name="name" placeholder='movie name' onChange={handleChange} value={formData.name}></input>
        <input name='img_url' placeholder='img url' onChange={handleChange} value={formData.img_url}></input>
        <input name='director' placeholder='director' onChange={handleChange} value={formData.director}></input>
        <input name='year' placeholder='year' onChange={handleChange} value={formData.year}></input>
        <button type='submit'>{movie ? 'Update' : 'Add'} Movie</button>
      </form>
    </div>
  )
}
