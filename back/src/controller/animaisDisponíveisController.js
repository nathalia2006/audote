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

module.exports = {
    listarAnimais
}