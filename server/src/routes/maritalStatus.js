import { Router } from 'express';
import maritalStatusController from '../controllers/MaritalStatus';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para buscar os tipos de estado civil

routes.get('/', loginRequired, maritalStatusController.index);

export default routes;
