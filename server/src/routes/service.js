import { Router } from 'express';
import serviceController from '../controllers/Service';
/*
  import loginRequired from '../middlewares/loginRequired';

  - Import dos middleware de autenticação para as rotas que precisam do usuário logado
  - Exemplo: rota de atualização de informações do usuário (PUT /users)
      routes.put('/', loginRequired, userController.update);
*/
const routes = new Router();

routes.post('/', serviceController.create);
routes.delete('/:id', serviceController.delete);
routes.get('/', serviceController.index);
routes.get('/:id', serviceController.show);
routes.put('/:id', serviceController.update);
export default routes;
