const express = require('express');
const bodyParser = require('body-parser')
const git = require('../helpers/github.js');
const Repo = require('../database/index.js'); 
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  git.getReposByUsername(req.body.username, (err, response, body) => {
    var data = [];
    var repos = JSON.parse(body);
    for (var i = 0; i < repos.length; i++) {
      var repo = repos[i];
      var obj = {
        repo_id: repo.id,
        name: repo.name,
        description: repo.description,
        repo: repo.html_url,
        user: repo.owner.login,
        forks: repo.forks

      }
      data.push(obj);
    }
    Repo.save(data, (err, docs) => {
      if (err){
        console.log(err);
      }
      res.status(201).json(docs);
    });

  });
});

app.get('/repos', function (req, res) {
  console.log('hi');
  // TODO - your code here!
  // This route should send back the top 25 repos
  Repo.load((err, docs) => {
    res.status(201).json(docs);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

