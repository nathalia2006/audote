// Importa o módulo express e cria um roteador
const express = require('express');
const router = express.Router();

const { listarAnimais } = require('../controller/animaisDisponíveisController');

/**
 * @swagger
 * /tasks/list:
 *  get:
 *    summary: Retorna todas as tarefas
 *    responses:
 *      200:
 *        description: Uma lista de tarefas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 */

// Define uma rota GET para "/animais"
router.get('/animais/listar', listarAnimais);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;

