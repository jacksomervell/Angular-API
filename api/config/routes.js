var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var postsController = require('../controllers/posts');

// http://127.0.0.1:3000/posts
router.route('/posts')

  //GET all posts
//   .get(postsController.getAll)



// router.route('/criminals/:id')

//   // GET return specific candy
//   .get(criminalsController.getCriminal)

//   // PATCH update existing candy
//   .patch(criminalsController.updateCriminal)

//   // DELETE remove specific candy from DB
//   .delete(criminalsController.removeCriminal);


module.exports = router