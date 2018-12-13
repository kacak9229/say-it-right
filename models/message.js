var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MessageSchema = new Schema({
  content: { type: String, index: true, trim: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  gender: Number
})

module.exports = mongoose.model('Message', MessageSchema)
