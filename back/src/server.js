const app = require('./app'); // Importa o aplicativo Express
const port = app.get('port'); // Obtém a porta definida no aplicativo

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); // Mensagem de log formatada
});
