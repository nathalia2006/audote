const connection = require('../config/db');
 
async function storeUser(request, response) {
    // recuperar dados do form
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha
    );
    // comando no banco
    const query = "INSERT INTO usuario(nome,email,senha) VALUES(?,?,?)";
 
    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if (results) {
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
                    success: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
}

module.exports = {
    storeUser
};