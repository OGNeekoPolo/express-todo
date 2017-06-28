const express = require('express');
const bodyParser = require('body-parser');
const models = require('../models');

const Router = express.Router();

Router.use(bodyParser.urlencoded({extended: true}));

Router.get("/", function (req, res) {
  models.Todo.findAll().then(function(todos){
    todos.forEach(function(todo){
      console.log(todo);
    })
    res.render('index', {todos: todos});
  })
});


Router.post('/create', function(req, res){
  models.Todo.create({
    title: req.body.todo
  }).then(function(newTodo){
    res.redirect('/');
  });
});

Router.post('/complete', function(req, res){
  console.log(req.body);
  models.Todo.destroy({
  //   completed: new Date()
  // },{
    where: {
      id: Number(req.body.todo)
    }
  }).then(function(complete){
    res.redirect('/');
  })
});

module.exports = Router;
