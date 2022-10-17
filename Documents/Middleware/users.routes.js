const { Router, response } = require('express');

const usersRoutes = Router();
const UsersController = require('../UsersContoller');//caminho do arquivo
// como ele é uma classe, é necessário instânciar ele na memória

function myMiddleware(req, res, next) {
    console.log('passou pelo middleware');

    if(!request.body.isAdmin) {
        return response.json({ message: "user unauthorized!"})
    }

    next();
}

const usersController = new UsersController();

usersRoutes.use(myMiddleware); //para todas as rotas 
usersRoutes.post('/', myMiddleware, usersController.create); //para rotas especificas

module.exports = usersRoutes;