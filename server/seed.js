const mongoose = require('mongoose');
require('dontenv').config();

const Movie = require('./models/Movies');

// connect to our database
mongoose.connect(process.env.somethign) // finish this

async function seed() {
  // create a new instance of a 'movie' and add it to the Database. We can think of this like using constructors from ealier in vanilla js

  await Movie.create({
    name: 'Lady Snowblood',
    director: 'Some Guy',
    isGood: true
  })

  console.log('Created a new movie');
  mongoose.disconnect();
}

seed();