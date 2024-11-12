const connection = require('../config/db');  // Importa a conexão com o banco de dados

// Função para listar todos os animais cadastrados
async function listarAnimais(request, response) {
    let query = 'SELECT * FROM cadastro_animais';  // Query para selecionar todos os registros de animais

    // Executa a query no banco de dados
    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({  // Responde com status 200 e dados de sucesso
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({  // Responde com status 400 em caso de erro
                success: false,
                message: "Erro ao listar animais",
                data: err
            });
        }
    });
}

// Função para deletar um animal pelo ID
async function deleteAnimais(request, response) {
    const animaisId = request.params.id; // Obtém o ID do animal dos parâmetros da requisição
    const query = "DELETE FROM cadastro_animais WHERE id = ?"; // Query para deletar o animal pelo ID

    // Executa a query de deleção
    connection.query(query, [animaisId], (err, results) => {
        if (results.affectedRows > 0) {
            response.status(200).json({  // Responde com sucesso se o animal foi deletado
                success: true,
                message: "Animal deletado com sucesso!"
            });
        } else {
            response.status(404).json({  // Responde com erro 404 se o animal não foi encontrado
                success: false,
                message: "Animal não encontrado!"
            });
        }
    });
}

// Função para editar um animal pelo ID
async function editarAnimais(request, response) {
    const animaisId = request.params.id;  // Obtém o ID do animal dos parâmetros da requisição
    const { nome_animal, telefone_animal, descricao_animal } = request.body;  // Extrai os dados do corpo da requisição

    // Query de atualização para os dados do animal
    const query = `
        UPDATE cadastro_animais 
        SET 
            nome_animal = ?, 
            telefone_animal = ?, 
            descricao_animal = ?
        WHERE id = ?`;

    const params = [nome_animal, telefone_animal, descricao_animal, animaisId];  // Parâmetros da query

    // Executa a query de atualização
    connection.query(query, params, (err, results) => {
        if (err) {
            console.error(err);
            response.status(400).json({  // Responde com status 400 e erro caso ocorra problema na query
                success: false,
                message: "Erro ao editar o animal",
                data: err
            });
        } else if (results.affectedRows > 0) {
            response.status(200).json({  // Responde com sucesso se o animal foi editado
                success: true,
                message: "Animal editado com sucesso!"
            });
        } else {
            response.status(404).json({  // Responde com erro 404 se o animal não foi encontrado
                success: false,
                message: "Animal não encontrado!"
            });
        }
    });
}

// Exporta as funções para serem usadas em outras partes da aplicação
module.exports = {
    listarAnimais,
    deleteAnimais,
    editarAnimais
};