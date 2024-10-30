const app = require('./app'); // Importa o aplicativo Express
const port = app.get('port'); // Obtém a porta definida no aplicativo

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); // Mensagem de log formatada
});

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tarefas',
            version: '1.0.0',
            description: 'API CRUD para gerenciar tarefas',
        },
        servers: [{ url: 'http://localhost:3005' }],
    },
    apis: [`${__dirname}/routes/*.js`], // caminho para as rotas
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));