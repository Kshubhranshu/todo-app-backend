const routes = require('express').Router();
const todoList = require('./todo-list');
const auth = require('./auth');

routes.use('/auth', auth);
routes.use('/todo', todoList);

module.exports = routes;