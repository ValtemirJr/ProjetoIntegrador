import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import homeRoutes from './routes/home';
import clientRoutes from './routes/client';
import serviceTypeRoutes from './routes/serviceType';
import serviceRoutes from './routes/service';
import schedulingRoutes from './routes/scheduling';
import nacionalityRoutes from './routes/nacionality';
import maritalStatusRoutes from './routes/maritalStatus';
import tokenRoutes from './routes/token';
import schedulingStatusRoutes from './routes/schedulingStatus';

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
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // Define as rotas da aplicação
    this.app.use('/', homeRoutes);
    this.app.use('/client/', clientRoutes);
    this.app.use('/serviceType/', serviceTypeRoutes);
    this.app.use('/service/', serviceRoutes);
    this.app.use('/scheduling/', schedulingRoutes);
    this.app.use('/schedulingStatus/', schedulingStatusRoutes);
    this.app.use('/nacionality/', nacionalityRoutes);
    this.app.use('/maritalStatus/', maritalStatusRoutes);
    this.app.use('/token/', tokenRoutes);
  }
}

export default new App().app;
