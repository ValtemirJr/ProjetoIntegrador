import { Router } from 'express';
import clientController from '../controllers/Client';
/*
  import loginRequired from '../middlewares/loginRequired';

  - Import dos middleware de autenticação para as rotas que precisam do usuário logado
  - Exemplo: rota de atualização de informações do usuário (PUT /users)
      routes.put('/', loginRequired, userController.update);
*/
const routes = new Router();

routes.post('/', clientController.create);
routes.delete('/:id', clientController.delete);
routes.get('/', clientController.index);
routes.get('/:id', clientController.show);
routes.put('/:id', clientController.update);
export default routes;
