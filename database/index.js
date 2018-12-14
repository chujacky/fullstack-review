const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: {
    type: Number,
    unique:true;
  }
  name: String,
  description: String,
  repo: String,
  user: String,
  forks: 0

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.collection.insertMany(repos);
}

module.exports.save = save;