import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import productController from './app/controllers/productController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

routes.post('/products', upload.single('file'), productController.store);

routes.get('/products', productController.index);

export default routes;
