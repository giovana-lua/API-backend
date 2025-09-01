
// Importar o módulo do express
const express = require('express');

//criar uma aplicação express 
const app = express();

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de teste da API 
app.get('/api',(req, res) => {
    res.send("API de Usuários está Funcionando")
});


//Aqui irei desenvolver a lógica para listar os usuários



///Rota para cadastrar um usuário
app.post('/api/cadastrar', (req, res) =>{
    //cadastro um usuario
})


//Iniciar servidor 
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})