require('dotenv').config();

// Módulo de configuração do banco de dados PostgreSQL
// O Sequelize utiliza esse módulo para se conectar ao banco de dados
module.exports = {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: false,
    updatedAt: false,
  },
};

// Passos para criar o banco de dados:
// npx sequelize db:create : cria o banco de dados
// npx sequelize db:migrate : cria as tabelas do banco de dados
// npx sequelize db:seed:all : insere os dados das usuárias nas tabelas do banco de dados
