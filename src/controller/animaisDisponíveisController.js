const connection = require('../config/db');

async function listarAnimais(request, response) {
    let query = 'SELECT * FROM cadastro_animais';

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: true,
                    message: "Sucesso",
                    data: results
                })
        }
    })
}

// Função assíncrona para deletar um blog pelo ID
async function deleteAnimais(request, response) {
    const animaisId = request.params.id; // Obtém o ID do blog a partir dos parâmetros da requisição
    const query = "DELETE FROM cadastro_animais WHERE id = ?"; // Query para deletar o animal
 
    connection.query(query, [animaisId], (err, results) => {
        if (results.affectedRows > 0) {
            response.status(200).json({
                success: true,
                message: "Animal deletado com sucesso!"
            });
        } else {
            response.status(404).json({
                success: false,
                message: "Animal não encontrado!"
            });
        }
    });
}

module.exports = {
    listarAnimais,
    deleteAnimais
}