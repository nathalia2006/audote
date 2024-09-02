// Importa os módulos necessários
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');

//Importar constrollers
const { storeCadastroAnimais } = require('../controller/cadastroAnimaisController');

// Função de controlador para lidar com o upload e outras lógicas de processamento
// const storeCadastroAnimais = (req, res) => {
//   // Aqui você pode acessar o arquivo enviado através de req.file
//   // Pode adicionar lógica adicional para processar o arquivo e os dados do formulário
//   res.send('Arquivo enviado com sucesso!');
// };

// Define uma rota POST para o endpoint "/cadastroAnimais"
// `upload.single('foto')` lida com o upload do arquivo com o campo de nome 'foto'
router.post('/cadastroAnimais', upload.single('foto'), storeCadastroAnimais);

// Exporta o roteador para uso em outros arquivos
module.exports = router;
