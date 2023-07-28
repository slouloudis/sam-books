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



// this is the root url, with the HTTP method (get). What is going to happen when someone hits this URL? We provide a callback function. we can use the response object, and the send method on that to send a string back. 
app.get('/', (req,res) => res.status(200).send(`Whoa, you've made it`))



app.listen(PORT, () => console.log(`summoning a server on... ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ PORT: ${PORT}`))