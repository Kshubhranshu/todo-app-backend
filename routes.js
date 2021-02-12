const routes = require('express').Router();
const todoList = require('./todo-list');
const auth = require('./auth');

routes.use('/', todoEndPoints);
routes.use('todo', todoList);

module.exports = routes;