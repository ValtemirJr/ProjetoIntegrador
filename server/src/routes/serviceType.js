import { Router } from 'express';
import serviceTypeController from '../controllers/ServiceType';

const routes = new Router();

// Rotas para o CRUD de tipos de serviços

routes.post('/', serviceTypeController.create);
routes.delete('/:id', serviceTypeController.delete);
routes.get('/', serviceTypeController.index);
routes.get('/:id', serviceTypeController.show);
routes.put('/:id', serviceTypeController.update);
export default routes;
