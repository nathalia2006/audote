// Importa o módulo mysql2 para conectar ao banco de dados MySQL
const mysql = require('mysql2');

// Importa e carrega as variáveis de ambiente do arquivo .env
const env = require('dotenv').config();

// Cria uma conexão com o banco de dados MySQL usando as variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,       // Endereço do servidor de banco de dados
    user: process.env.DB_USER,       // Nome de usuário para autenticação
    password: process.env.DB_PASSWORD, // Senha para autenticação
    database: process.env.DB_DATABASE // Nome do banco de dados a ser usado
});

// Estabelece a conexão com o banco de dados e trata possíveis erros
connection.connect((err) => {
    if (err) {
        // Se ocorrer um erro, ele será lançado e o processo será interrompido
        throw err;
    } else {
        // Se a conexão for bem-sucedida, uma mensagem será exibida no console
        console.log('Mysql connected');
    }
});

// Exporta a conexão para que possa ser usada em outros módulos
module.exports = connection;
