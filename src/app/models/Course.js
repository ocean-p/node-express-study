const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  name: {type: String, maxLength: 255},
  description: {type: String, maxLength: 600},
  image: {type: String, maxLength: 255},
  slug: {type: String},
  // createdAt: {type: Date, default: Date.now},
  // updatedAt: {type: Date, default: Date.now},
}, {timestamps: true})

module.exports = mongoose.model('Course', Course)