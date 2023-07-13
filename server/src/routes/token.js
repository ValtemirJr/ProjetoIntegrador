import { Router } from 'express';
import tokenController from '../controllers/Token';

const routes = new Router();

// Rota que gera o token de autenticação do usuário
// O body deve conter email e password válidos
// É retornado o usuário e o token
routes.post('/', tokenController.store);

export default routes;
