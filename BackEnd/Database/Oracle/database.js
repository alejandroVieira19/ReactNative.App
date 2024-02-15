// database.js

const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do middleware para fazer o parsing do corpo da solicitação
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do middleware CORS para permitir solicitações de todas as origens
app.use(cors());

// Configuração da conexão com o banco de dados Oracle
const dbConfig = {
  user: 'ale',
  password: 'oracle',
  connectString: 'localhost:1521/xe'
};

// Rota para processar o login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
 
  let connection;

  try {
    // Estabelece a conexão com o banco de dados Oracle
    connection = await oracledb.getConnection(dbConfig);

    // Executa uma consulta SQL para verificar as credenciais do usuário
    const result = await connection.execute(
      `SELECT * FROM users WHERE lower(email) like lower(:email) AND lower(password) like lower(:password)`,
      { email, password }
    );

    // Verifica se encontrou algum usuário com as credenciais fornecidas
    if (result.rows.length > 0) {
      res.json({ success: true, message: 'Usuário autenticado com sucesso' });
    } else {
      res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
  } catch (err) {
    console.error('Erro ao processar login:', err);
    res.status(500).json({ error: 'Erro ao processar login' });
  } finally {
    // Fecha a conexão com o banco de dados Oracle
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Erro ao fechar conexão com Oracle:', err);
      }
    }
  }
});

// Inicia o servidor da API
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});