import { Router } from 'express';
import schedulingController from '../controllers/Scheduling';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rotas para o CRUD de agendamentos

routes.post('/', loginRequired, schedulingController.create);
routes.delete('/:id', loginRequired, schedulingController.delete);
routes.get('/', loginRequired, schedulingController.index);
routes.get('/:id', loginRequired, schedulingController.show);
routes.put('/:id', loginRequired, schedulingController.update);

export default routes;
