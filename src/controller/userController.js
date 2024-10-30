// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeUser(request, response) {
    // Recupera os dados do formulário do corpo da solicitação
    const params = Array(
        request.body.nome,  // Nome do usuário
        request.body.email, // Email do usuário
        request.body.senha  // Senha do usuário
    );

    // Define a consulta SQL para inserir um novo usuário na tabela 'usuario'
    const query = "INSERT INTO usuario(nome,email,senha) VALUES(?,?,?)";

    // Executa a consulta SQL com os parâmetros fornecidos
    connection.query(query, params, (err, results) => {
        // Imprime os erros e resultados no console para depuração
        console.log(err, results);

        // Verifica se a operação foi bem-sucedida
        if (results) {
            // Se a inserção for bem-sucedida, responde com status 200 e mensagem de sucesso
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                });
        } else {
            // Se houver um erro, responde com status 400 e mensagem de falha
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                });
        }
    });
}

// Exporta a função storeUser para uso em outros módulos
module.exports = {
    storeUser
};
