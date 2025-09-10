//1º passo - importar o express
const express = require('express');
  

//2º passo - Criar um router 
const router = express.Router();
const userController = require('../controller/userController');

//3º passo - Criar rotas para o usuários 
router.get('/list', userController.getAllUsers);

//Criando a rota que irá obter os dados do usuário por id
//localhost:8000/api/user/
router.get('/:id', userController.getUserById);

//Criando uma rota que ira criar um novo usuario
router.post('/',userController.createUser);

//Criando uma rota que ira deletar um usuário
router.delete('/:id', userController.deleteUser);


//criando uma rota para Atualizar um usuario
//localhost:8000/api/user/
router.put('/',userController.updateUser);


module.exports = router;