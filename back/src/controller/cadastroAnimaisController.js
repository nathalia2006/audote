const connection = require('../config/db');
 
async function storeCadastroAnimais(request, response) {
    // recuperar dados do form
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.descrição_animal,
        request.body.password,
        request.body.foto_animal
    );
    // comando no banco
    const query = "INSERT INTO cadastro_animais(name,email,descrição_animal,password,foto_animal) VALUES(?,?,?,?,?)";
 
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    sucess: true,
                    message: "Sucesso",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    sucess: false,
                    message: "Sem Sucesso",
                    data: err
                })
        }
    })
}

module.exports = {
    storeCadastroAnimais
};