var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/', function() {
  // Load Mongoose models 
  seeder.loadModels(['./models/Post.js']);
  // Clear specified collections 
  seeder.clearModels(['Post'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});

var data = [
  { 
    'model': 'Post',
    'documents': [
      {
        name: Jack Somervell,
        location: Birmingham,
        status: Angular sure is dumb
      }
      {
        name: Meg Pickering,
        location: Bristol,
        status: I love Angular
      }
      {
        name: Jason Heath,
        location: London,
        status: Angular sure is amazing
      }
      {
        name: Batman,
        location: Birmingham,
        status: Angular sure is cool
      }
      {
        name: Josh Forster,
        location: Bristol,
        status: Angular is awffullll
      }
      {
        name: Kate Probert,
        location: Chippenham ,
        status: Angular sure is the best thing in the world
      }
      {
        name: Jemal,
        location: Birmingham,
        status: Wooo angular
      }
      
    ]
  }
];  