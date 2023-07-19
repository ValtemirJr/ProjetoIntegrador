import { Router } from 'express';
import serviceTypeController from '../controllers/ServiceType';
/*
  import loginRequired from '../middlewares/loginRequired';

  - Import dos middleware de autenticação para as rotas que precisam do usuário logado
  - Exemplo: rota de atualização de informações do usuário (PUT /users)
      routes.put('/', loginRequired, userController.update);
*/
const routes = new Router();

routes.post('/', serviceTypeController.create);
routes.delete('/:id', serviceTypeController.delete);
routes.get('/', serviceTypeController.index);
routes.get('/:id', serviceTypeController.show);
routes.put('/:id', serviceTypeController.update);
export default routes;
