import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';

const models = [User];
const connection = new Sequelize(databaseConfig);

// Inicializa os models e associa as tabelas do banco de dados com os models do Sequelize
models.forEach((model) => model.init(connection));

// Inicializa os relacionamentos entre as tabelas do banco de dados
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
