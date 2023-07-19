import { Router } from 'express';
import schedulingController from '../controllers/Scheduling';

const routes = new Router();

routes.post('/', schedulingController.create);
routes.delete('/:id', schedulingController.delete);
routes.get('/', schedulingController.index);
routes.get('/:id', schedulingController.show);
routes.put('/:id', schedulingController.update);
export default routes;
