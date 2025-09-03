//Simulação de um banco de dados e memória

let users =[
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Roberto', email: 'roberto@gmail.com'},
    {id: 3, name: 'Josué', email: 'josue@gmail.com'}
];

//Funções que irão simular integração com o banco de dados 

//Função que lista todos os usuários (comando select) 

const findAll = () => {
    return users;
}

//Função que busca um usuário por ID (comando select * from usuarios where id = 1)
const findById = (id) =>{
    return users.find(user => user.id === id);
}

// Função para adicionar um novo usuário (comando insert)
const create = (newUser) => {

// Gerndo o ID do próximo item (usuário)
    const newId = users.length > 0 ? users [users.length -1 ]. id + 1 : 1; 

    //Criando um novo usuário com o id novo 
    const userWithId = {id: newId, ...newUser};

    //Adicionar o userWithId no array users 
    users.push(userWithId);

    // Retornar o usuário cadastrado 
    return userWithId;

}

module.exports ={
    findAll,
    findById,
    create
}
