// Importa a configuração da conexão com o banco de dados
const connection = require('../config/db');

async function login(request, response) {
    // Recupera o email do corpo da solicitação
    const email = Array(request.body.email);

    // Define a consulta SQL para selecionar o email e a senha do usuário
    const query = "SELECT email, senha FROM usuario WHERE email = ?";

    // Executa a consulta SQL
    connection.query(query, email, (err, results) => {
        // Verifica se há resultados da consulta
        if (results.length > 0) {
            // Recupera a senha fornecida e a senha do banco de dados
            const password = request.body.senha;
            const passwordQuery = results[0].senha;
            
            // Imprime a senha fornecida e a senha do banco de dados para depuração
            console.log(password);
            console.log(passwordQuery);

            // Compara a senha fornecida com a senha do banco de dados
            if (password === passwordQuery) {
                // Se as senhas coincidirem, responde com sucesso
                response
                    .status(200)
                    .json({
                        success: true,
                        message: "Sucesso",
                        data: results
                    });
            } else {
                // Se as senhas não coincidirem, responde com erro de senha incorreta
                response
                    .status(400)
                    .json({
                        success: false,
                        message: "Senha incorreta"
                    });
            }
        } else {
            // Se não houver resultados, responde com erro de email não encontrado
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso!",
                    data: err
                });
        }
    });
}

// Exporta a função login para uso em outros módulos
module.exports = {
    login
};
