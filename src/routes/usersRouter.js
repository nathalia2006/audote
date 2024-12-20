const { Router } = require('express'); // Importa o construtor Router do Express
const router = Router(); // Cria uma nova instância do roteador Express

const { storeUser } = require('../controller/userController'); // Importa a função storeUser do controlador

/**
 * @swagger
 * /tasks/register:
 *  post:
 *    summary: Cadastra uma nova tarefa
 *    responses:
 *      200:
 *        description: Sucesso!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */

// Define uma rota POST para o endpoint "/user/create" e associa a função storeUser ao handler
router.post('/user/create', storeUser);

module.exports = router; // Exporta o roteador para uso em outros arquivos
