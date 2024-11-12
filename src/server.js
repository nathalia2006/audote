// Importa o aplicativo Express que está configurado em outro arquivo
const app = require('./app'); 
// Obtém a porta definida no arquivo de configuração do aplicativo
const port = app.get('port'); 

// Inicia o servidor Express na porta definida e imprime uma mensagem no console
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`); // Mensagem de log formatada
});

// Importa os módulos necessários para gerar a documentação Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Define as opções de configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // Define a versão do OpenAPI
        info: {
            title: 'API de Tarefas', // Título da API
            version: '1.0.0', // Versão da API
            description: 'API CRUD para gerenciar tarefas', // Descrição da API
        },
        // Define os servidores onde a API pode ser acessada
        servers: [{ url: 'http://localhost:3005' }],
    },
    // Define o caminho para os arquivos de rotas que serão documentados
    apis: [`${__dirname}/routes/*.js`], // Caminho para as rotas
};

// Gera a documentação Swagger a partir das configurações definidas
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// Usa o middleware do Swagger para expor a documentação da API em "/api-docs"
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));