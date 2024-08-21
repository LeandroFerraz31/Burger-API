import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/authmid';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import productController from './app/controllers/productController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/products', upload.single('file'), productController.store);

routes.get('/products', productController.index);

routes.post('/categories', CategoryController.store);

routes.get('/categories', CategoryController.index);

routes.post('/order', OrderController.store);


export default routes;
