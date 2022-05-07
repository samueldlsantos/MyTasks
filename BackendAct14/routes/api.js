import { Router } from 'express';
import 'express-group-routes';
import listEndpoints from 'express-list-endpoints';
import apiResource from './resources.js';
//middleware
//Controllers
import userController from './../app/controllers/user.controller.js';
import materiasController from './../app/controllers/materias.controller.js';
import authController from './../app/controllers/auth-controller.js';


const router = Router();



router.group("/api", (router) => {
	
    router.get('/login', authController.login);
    apiResource("/users", userController, router);
    apiResource("/materias", materiasController, router);
	
	
});

console.log(listEndpoints(router));

export default router;