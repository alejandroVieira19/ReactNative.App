// database.js

const express = require('express');
const oracledb = require('oracledb');

const app = express();
const port = 3000;
const nameVer = 'apple';

// Configuração da conexão com o banco de dados Oracle
const dbConfig = {
  user: 'ale',
  password: 'oracle',
  connectString: 'localhost:1521/xe'
};

// Rota para recuperar dados do banco de dados Oracle
app.get('/dados-oracle', async (req, res) => {
  let connection;

  try {
    // Estabelece a conexão com o banco de dados Oracle
    connection = await oracledb.getConnection(dbConfig);

    // Executa uma consulta SQL para recuperar dados
    const result = await connection.execute(
      `SELECT * FROM item where lower(item_name) like lower('orange')`
    );

    // Retorna os dados recuperados como resposta da API
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao recuperar dados do Oracle:', err);
    res.status(500).json({ error: 'Erro ao recuperar dados do Oracle' });
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