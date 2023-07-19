import { Router } from 'express';
import clientController from '../controllers/Client';

const routes = new Router();

// Rotas para o CRUD de clientes

routes.post('/', clientController.create);
routes.delete('/:id', clientController.delete);
routes.get('/', clientController.index);
routes.get('/:id', clientController.show);
routes.put('/:id', clientController.update);

export default routes;
