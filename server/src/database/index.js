import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Client from '../models/Client';
import ServiceType from '../models/ServiceType';
import Service from '../models/Service';
import Scheduling from '../models/Scheduling';
import Nacionality from '../models/Nacionality';
import MaritalStatus from '../models/MaritalStatus';

// Array com todos os models da aplicação para inicializar o Sequelize
const models = [User, Client, ServiceType, Service, Scheduling, Nacionality, MaritalStatus];
// Inicializa o Sequelize com as configurações do banco de dados
const connection = new Sequelize(databaseConfig);

// Inicializa os models e associa as tabelas do banco de dados com os models do Sequelize
models.forEach((model) => model.init(connection));

// Inicializa os relacionamentos entre as tabelas do banco de dados
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);

// Passos para criar o banco de dados:
// npx sequelize db:create : cria o banco de dados
// npx sequelize db:migrate : cria as tabelas do banco de dados
// npx sequelize db:seed:all : insere os dados das usuárias nas tabelas do banco de dados
