import { Router } from 'express';
import serviceController from '../controllers/Service';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de serviços

routes.post('/', loginRequired, serviceController.create);
routes.delete('/:id', loginRequired, serviceController.delete);
routes.get('/', loginRequired, serviceController.index);
routes.get('/:id', loginRequired, serviceController.show);
routes.put('/:id', loginRequired, serviceController.update);
export default routes;
