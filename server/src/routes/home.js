import { Router } from 'express';
import homeController from '../controllers/Home';

const routes = new Router();

// Rota para a página inicial da API
routes.get('/', homeController.index);

export default routes;
