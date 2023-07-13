import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './routes/home';
import userRoutes from './routes/user';
import tokenRoutes from './routes/token';
// Importa a conexão com o banco de dados
import './database';

dotenv.config();

class App {
  // Inicializa a aplicação
  // Define os middlewares e as rotas
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Permite que a aplicação receba requisições em JSON
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // Define as rotas da aplicação
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token/', tokenRoutes);
  }
}

export default new App().app;
