const mongoose = require('mongoose');

const {Schema} = mongoose;

const movieSchema = new Schema({
  name: String,
  director: String,
  isGood: Boolean
})

const Movie = mongoose.model('Movie', movieSchema)