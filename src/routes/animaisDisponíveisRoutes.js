// Importa o módulo express e cria um roteador
const express = require('express');
const router = express.Router();

// Importa as funções de controle para manipulação dos animais
const { listarAnimais, deleteAnimais, editarAnimais } = require('../controller/animaisDisponíveisController');

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

// Define uma rota GET para "/animais/listar" que chama a função listarAnimais para listar os animais
router.get('/animais/listar', listarAnimais);

// Define a rota DELETE para deletar um animal específico. Quando um pedido DELETE é feito para '/delete/animais/:id', a função deleteAnimais é chamada
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

// Define a rota PUT para editar um animal específico. Quando um pedido PUT é feito para '/animais/editar/:id', a função editarAnimais é chamada
router.put('/animais/editar/:id', editarAnimais);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;
