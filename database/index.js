const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: {
    type: Number,
    unique:true
  },
  name: String,
  description: String,
  repo: String,
  user: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany(repos, (err, docs) => {
    if (err){
      cb(err);
      return;
    } 
    cb(null, docs)
  });
}

let load = (cb) => {
  Repo.find({}).sort({forks:-1}).limit(25).exec((err, docs) => {
    if (err) {
      cb(err);
    }
    cb(null, docs);
  })
}

module.exports.save = save;
module.exports.load = load;