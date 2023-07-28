const express = require('express')
const cors = require('cors') 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 2000;

// connect to our mongoDB database. 
mongoose.connect(process.env.DATABASE_URL).then(() => console.log('DB connected'))

app.post('/movies', newMovies)


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



app.listen(PORT, () => console.log(`summoning a server on... ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ PORT: ${PORT}`))