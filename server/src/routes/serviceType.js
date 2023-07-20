import { Router } from 'express';
import serviceTypeController from '../controllers/ServiceType';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de tipos de serviços

routes.post('/', loginRequired, serviceTypeController.create);
routes.delete('/:id', loginRequired, serviceTypeController.delete);
routes.get('/', loginRequired, serviceTypeController.index);
routes.get('/:id', loginRequired, serviceTypeController.show);
routes.put('/:id', loginRequired, serviceTypeController.update);
export default routes;
