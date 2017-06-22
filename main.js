const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.use("/public", express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

const todos = [
  "Wash the car"
];

app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});

app.listen(3000, function(req, res){
  console.log("Starting To-Do List...");
});
