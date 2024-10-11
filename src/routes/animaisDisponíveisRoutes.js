// Importa o módulo express e cria um roteador
const express = require('express');
const router = express.Router();

const { listarAnimais, deleteAnimais } = require('../controller/animaisDisponíveisController');

/**
 * @swagger
 * /animais/listar:
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

// Define a rota DELETE para deletar um blog específico. Quando um pedido DELETE é feito para '/delete/blog/:id', a função deleteBlog é chamada
/**
 * @swagger
 * /delete/animais:id:
 *   delete:
 *     summary: Define a rota DELETE para deletar um animal específico
 *     responses:
 *       200:
 *         description: Post do feed
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.delete('/delete/animais/:id', deleteAnimais);

//criar rota pro put e delete

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;

