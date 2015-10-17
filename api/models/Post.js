var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  name: String,
  location: String,
  status: String
});

module.exports = mongoose.model('Post', PostSchema);
