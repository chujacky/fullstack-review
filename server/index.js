const express = require('express');
const bodyParser = require('body-parser')
const git = require('../helpers/github.js');
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
    var repos = [];

    // for (var i = 0; i < body.length; i++) {
    //   var repo = body[i];
    //   var obj = {
    //     repo_id: repo.id
    //   }
    //   repos.push(obj);
    // }
    
    console.log(body[1]);
    res.status(200).send('posted')
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

