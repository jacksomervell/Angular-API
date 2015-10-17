angular.module('IHateAngularApp', [])
  .controller('PostsController', PostsController);

  PostsController.$inject = ['$http'];