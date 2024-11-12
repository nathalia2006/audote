const multer = require("multer");  // Importa o módulo multer para upload de arquivos

// Configurações de armazenamento para o multer
var storage = multer.diskStorage({
    // Define o destino dos arquivos
    destination: function (req, file, cb) {
        return cb(null, "./src/uploads");  // Define a pasta de destino dos uploads
    },
    // Define o nome dos arquivos salvos
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`);  // Adiciona um timestamp ao nome original para evitar duplicatas
    }
});

// Cria o middleware de upload com as configurações de armazenamento definidas
var upload = multer({ storage });

// Exporta o middleware para ser usado em outras partes da aplicação
module.exports = upload;