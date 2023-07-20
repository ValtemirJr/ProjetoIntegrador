import { Router } from 'express';
import maritalStatusController from '../controllers/MaritalStatus';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de tipos de serviços

routes.get('/', loginRequired, maritalStatusController.index);

export default routes;
