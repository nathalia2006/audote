const express = require('express');
const app = express(); // Cria uma instância do aplicativo Express
const dotenv = require('dotenv').config(); // Carrega variáveis de ambiente
const cors = require('cors'); // Middleware para permitir CORS
const path = require('path'); // Utilitário para trabalhar com caminhos de arquivos
const fs = require('fs'); // Utilitário para operações de sistema de arquivos

// Importa rotas da aplicação
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRoutes');
const cadastroAnimaisRouter = require('./routes/cadastroAnimaisRoutes');
const animaisDisponíveisRoutes = require('./routes/animaisDisponíveisRoutes');

// Define a porta a partir das variáveis de ambiente
app.set('port', process.env.PORT || 3005); // Define a porta padrão se a variável de ambiente não estiver definida

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições
app.use(cors()); // Habilita o CORS para permitir requisições de diferentes origens

// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve arquivos estáticos da pasta "uploads"
app.use('/uploads', express.static(__dirname + '\\uploads'));

// Configura as rotas da aplicação
app.use('/api', usersRouter); // Roteia "/api" para o roteador de usuários
app.use('/api', loginRouter); // Roteia "/api" para o roteador de login
app.use('/api', cadastroAnimaisRouter); // Roteia "/api" para o roteador de cadastro de animais
app.use('/api', animaisDisponíveisRoutes); // Roteia "/api" para o roteador de animais disponíveis

module.exports = app; // Exporta o aplicativo para uso em outros arquivos
