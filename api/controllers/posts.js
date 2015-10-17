var Post = require('../models/Post');

// GET
function getAll(request, response) {
  Post.find(function(error, posts) {
    if(error) response.json({message: 'Could not find any posts'});

    response.json({posts: posts});
  }).select('-__v');
}