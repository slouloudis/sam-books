const express = require('express')
const cors = require('cors') 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const Movie = require('./models/Movies')
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 2000;

//const newMovies = require()

// connect to our mongoDB database. 
mongoose.connect(process.env.DATABASE_URL).then(() => console.log('DB connected'))

//app.post('/movies', newMovies)


// routing is how we determine how an application responds to a request from the client. 
// it's not just the URL, but also the HTTP method (GET, POST, PATCH, PUT, DELETE)
// GET -> Fetch data
// POST -> Send data, to create a resource
// PATCH -> Change data
// PUT -> Create/update a resource. (The difference between post and put, is that calling the same post request multiple times will create the same resource multiple times. Put will have the same output, no matter how many times you invoke (with the same data))
// DELETE -> Deletes a resource
// we are goign to be making a 'CRUD' app (Create, Read, Update, Delete)
// CRUD apps are very common. 
// REST -> Representaional State Transfer. blah blah. 

// this is the root url, with the HTTP method (get). What is going to happen when someone hits this URL? We provide a callback function. we can use the response object, and the send method on that to send a string back. 
app.get('/', (req,res) => res.status(200).send(`Whoa, you've made it`))

// createa

app.post('/movies', async (req,res) => {
  try {
    console.log(req)
    const newMovie = await Movie.create(req.body);
    res.status(200).json(newMovie)
  } catch (error){
    console.log(error)
    res.status(500).json(error)
  }
})

// read 
app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find(req.query) // eg the name of the movie
    res.status(200).json(movies)
  } catch (err) {
    console.log(err)
    res.status(404).json(err)
  }
})

// update 🧐

// Delete

app.delete('/movies/:id', async (req, res)=> {
  console.log(req)
  try {
    const id = req.params.id;
    console.log(id)
    const deletedMovie = await Movie.findByIdAndDelete(id);
    res.status(200).send(deletedMovie);
  } catch (err) {
    console.log(error)
    res.status(500).json(error)
  }
})

app.listen(PORT, () => console.log(`summoning a server on... ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ PORT: ${PORT}`))