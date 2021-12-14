import { createConnection } from 'typeorm';
createConnection()
    .then(() => console.log('Conexão com o banco de dados efetuada com sucesso!'))
    .catch(err => console.log('Falha de conexão com o banco de dados ->', err.message || err));