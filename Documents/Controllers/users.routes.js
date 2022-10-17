const { Router } = require('express');

const usersRoutes = Router();
const UsersController = require('../UsersContoller');
// como ele é uma classe, é necessário instânciar ele na memória

const usersController = new UsersController();

usersRoutes.post('/', usersController.create);

module.exports = usersRoutes;