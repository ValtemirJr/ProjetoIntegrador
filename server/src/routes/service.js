import { Router } from 'express';
import serviceController from '../controllers/Service';

const routes = new Router();

// Rotas para o CRUD de serviços

routes.post('/', serviceController.create);
routes.delete('/:id', serviceController.delete);
routes.get('/', serviceController.index);
routes.get('/:id', serviceController.show);
routes.put('/:id', serviceController.update);
export default routes;
