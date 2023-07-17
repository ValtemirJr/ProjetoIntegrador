import { Router } from 'express';
import clienteController from '../controllers/Cliente';
/*
  import loginRequired from '../middlewares/loginRequired';

  - Import dos middleware de autenticação para as rotas que precisam do usuário logado
  - Exemplo: rota de atualização de informações do usuário (PUT /users)
      routes.put('/', loginRequired, userController.update);
*/
const routes = new Router();

routes.post('/', clienteController.create);
routes.delete('/:id', clienteController.delete);
export default routes;
