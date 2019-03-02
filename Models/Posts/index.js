var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  body: String,
  createAt: {type: Date, default: Date.now},
  author: String,
  publlished: {type: Boolean, default: false},
  meta: {likes: Number}

});

module.exports = mongoose.model('Post', postSchema);
