// Importa os módulos necessários
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');  // Importa a configuração do multer para fazer o upload de arquivos

// Importa o controlador de cadastro de animais
const { storeCadastroAnimais } = require('../controller/cadastroAnimaisController');

// Função de controlador para lidar com o upload e outras lógicas de processamento
// const storeCadastroAnimais = (req, res) => {
//   // Aqui você pode acessar o arquivo enviado através de req.file
//   // Pode adicionar lógica adicional para processar o arquivo e os dados do formulário
//   res.send('Arquivo enviado com sucesso!');
// };

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

// Define uma rota POST para o endpoint "/cadastroAnimais" que chama a função storeCadastroAnimais
// A função upload.single('foto') lida com o upload de um único arquivo enviado com o campo de nome 'foto'
router.post('/cadastroAnimais', upload.single('foto'), storeCadastroAnimais);

// Exporta o roteador para uso em outros arquivos
module.exports = router;