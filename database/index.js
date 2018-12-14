const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: Number,
  user: String,
  description: String,
  repo: String,
  followers: 0

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (err, Repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (err) {
    return console.error(err);
  }
  console.log('created schema!')
}

module.exports.save = save;