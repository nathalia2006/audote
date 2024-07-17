const connection = require('../config/db');
 
async function storeUser(request, response) {
    // recuperar dados do form
    const params = Array(
        request.body.name,
        request.body.email,
        request.body.password
    );
    // comando no banco
    const query = "INSERT INTO users(name,email,password) VALUES(?,?,?)";
 
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
    storeUser
};