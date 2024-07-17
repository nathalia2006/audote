const express = require('express');
const router = express.Router();

const { storeCadastroAnimais } = require("../controller/cadastroAnimaisController");

router.post('/cadastroAnimais', storeCadastroAnimais);

module.exports = router;
