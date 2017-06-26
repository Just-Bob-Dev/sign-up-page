const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const data = require('./data.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('views', ['./views','./login']);
app.set('view engine', 'mustache');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// app.use('/', function(req, res, next){
//   let username = req.body.username;
//   let password = req.body.password;
//
//   data.Auth(req, username, password);
//   console.log("username: " + username + "password: " +password)
//   console.log(req.sessions);
// });

app.get('/', function(req, res){
  res.redirect('/login');
});

app.get('/login', function(req, res){
  res.render('login');
})

app.post('/', function(req,res){
  let username = req.body.username;
  let password = req.body.password;

  data.Auth(req, username, password);
  console.log(req.session)
  if(req.session && req.session.authenticated){
    res.render('index', { user: username})
  }
  else{
    res.redirect('/login');
  }
});

app.listen(3000, function(req, res){
  console.log('looks like you made it after all.')
})
