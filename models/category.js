var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CategorySchema = new Schema({
  title: { type: String, index: true, trim: true },
  womanProfile: String,
  imagePath: String,
  desc: String
})

module.exports = mongoose.model('Category', CategorySchema)
