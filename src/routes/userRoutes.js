//1º passo - importar o express
const express = require('express');
  

//2º passo - Criar um router 
const router = express.Router();
const userController = require('../controller/userController');

//3º passo - Criar rotas para o usuários 
router.get('/list', userController.getAllUsers);


module.exports = router;