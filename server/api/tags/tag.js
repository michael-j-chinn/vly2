const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
  _id: false,
  tag: String // "e.g C++"
})

module.exports = tagSchema
