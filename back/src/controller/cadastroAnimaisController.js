// Importa a configuração do banco de dados e o módulo dotenv
const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Função para armazenar dados de cadastro de animais
async function storeCadastroAnimais(request, response) {
    console.log("Chegou na função")
    console.log(request.body)

    // Recupera dados do corpo da requisição e do arquivo enviado
    const params = [
        request.body.email,           // Email do usuário
        request.body.senha,           // Senha do usuário
        request.body.descricao_animal, // Descrição do animal
        request.file.filename         // Nome do arquivo da foto do animal
    ];

    console.log(params)
    
    // Comando SQL para inserir dados na tabela cadastro_animais
    const query = "INSERT INTO cadastro_animais(email, senha, descricao_animal, foto_animal) VALUES(?, ?, ?, ?)";

    // Executa a query no banco de dados
    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if (err) {
            console.error(err); // Log de erro no console
            response.status(400).json({
                success: false,
                message: "Erro ao cadastrar o animal",
                data: err
            });
        } else {
            response.status(200).json({
                success: true,
                message: "Cadastro realizado com sucesso",
                data: results
            });
        }
    });
}

// Exporta a função para que possa ser usada em outros módulos
module.exports = {
    storeCadastroAnimais
};
