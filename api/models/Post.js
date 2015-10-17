var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  name: String,
  location: String,
  status: String  //status is the contents of the post.
});

module.exports = mongoose.model('Post', PostSchema);
