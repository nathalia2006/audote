const express = require('express'); // Importa o módulo Express
const router = express.Router(); // Cria um novo roteador Express

const { login } = require("../controller/loginController"); // Importa a função login do controlador

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

// Define uma rota POST para o endpoint "/login" e associa a função login ao handler
router.post('/login', login);

module.exports = router; // Exporta o roteador para uso em outros arquivos
