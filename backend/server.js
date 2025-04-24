const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

const filmesRoutes = require('./routes/filmes');
app.use('/filmes', filmesRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));