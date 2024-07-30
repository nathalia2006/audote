const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')

// rotas da aplicação
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRoutes');
const cadastroAnimaisRouter = require('./routes/cadastroAnimaisRoutes');

app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors())

// habilitar utilização em nossa aplicação
app.use('/api', usersRouter);
app.use('/api', loginRouter);
app.use('/api', cadastroAnimaisRouter)


module.exports = app;