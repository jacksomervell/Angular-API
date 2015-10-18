var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var postsController = require('../controllers/posts');

// http://127.0.0.1:3000/posts
router.route('/posts')

  .get(postsController.getAll)

  .post(postsController.createPost);


module.exports = router