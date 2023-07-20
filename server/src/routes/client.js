import { Router } from 'express';
import clientController from '../controllers/Client';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de clientes

routes.post('/', clientController.create);
routes.delete('/:id', loginRequired, clientController.delete);
routes.get('/', loginRequired, clientController.index);
routes.get('/:id', loginRequired, clientController.show);
routes.put('/:id', loginRequired, clientController.update);

export default routes;
