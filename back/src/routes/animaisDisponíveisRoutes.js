// Importa o módulo express e cria um roteador
const express = require('express');
const router = express.Router();

const { listarAnimais } = require('../controller/animaisDisponíveisController');

// Define uma rota GET para "/animais"
router.get('/animais/listar', listarAnimais);

// Exporta o roteador para ser usado em outros arquivos
module.exports = router;

