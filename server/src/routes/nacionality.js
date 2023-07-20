import { Router } from 'express';
import nacionalityController from '../controllers/Nacionality';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de tipos de serviços

routes.get('/', loginRequired, nacionalityController.index);

export default routes;
