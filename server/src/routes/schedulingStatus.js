import { Router } from 'express';
import schedulingStatusController from '../controllers/SchedulingStatus';
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

// Rota para listar status de agendamento

routes.get('/', loginRequired, schedulingStatusController.index);

export default routes;
