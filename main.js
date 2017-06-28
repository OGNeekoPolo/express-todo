const Router = require('./routes/router');
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

app.use('/', Router);

app.listen(3000, function(req, res){
  console.log("Starting To-Do List...");
});
