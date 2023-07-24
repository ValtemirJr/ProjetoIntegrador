require('dotenv').config();

// Módulo de configuração do banco de dados PostgreSQL
// O Sequelize utiliza esse módulo para se conectar ao banco de dados
module.exports = {
  dialect: 'postgres',
  // Comentar para rodar localmente
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
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
