angular.module('IHateAngularApp', [])
  .controller('PostsController', PostsController);

  PostsController.$inject = ['$resource'];

  PostsController.$inject = ['$resource']
function PostsController($resource) {
  var self = this;

  var Post = $resource('http://localhost:9000/posts/:id', { id: '@_id' }, {
    'update': { method: 'PUT' }
  });

  self.posts = Post.query();

  this.selectPost = function(character, index) {
    self.activePostIndex = index;
    self.selectedPost = Post.get({ id: post._id });
  };

  this.newPost = {};

  this.savePost = function() {
    // var character = new Character(self.newCharacter);
    // character.$save(function() {
    //   self.characters.push(character);
    //   self.newCharacter = {};
    // });

    Post.save(self.newPost, function(post) {
      self.posts.push(post);
      self.newPost = {};
    });
  }
}
