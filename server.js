
// Importar o módulo do express
const express = require('express');

//importar o arquivo das rotas dos usuarios
const userRoutes = require('./src/routes/userRoutes');  



//criar uma aplicação express 
const app = express();

//Definir para que o express analise JSON no corpo das requisições
app.use(express.json());

//Definir a porta em que o servidor irá funcionar (escutar)
const porta = 8000;

//Rota de teste da API 
app.get('/api',(req, res) => {
    res.send("API de Usuários está Funcionando")
});



//Configurando as rotas de usuario
app.use('/api/users', userRoutes)



//Iniciar servidor 
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})