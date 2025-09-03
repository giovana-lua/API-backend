
// Primeiro passo - importar o userModel
const userModel = require ('../model/userModel');

//Função do controller que lista os usuários
const getAllUsers = (req, res) => {

    //Chamando a função findAll do model
    const users = userModel.findAll();

    //Devolver uma resposta para o cliente
    res.status(200).json(users);
}

module.exports = {
 getAllUsers
}