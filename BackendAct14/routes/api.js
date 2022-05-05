import { Router } from 'express';
import 'express-group-routes';
import listEndpoints from 'express-list-endpoints';
import apiResource from './resources.js';
//middleware
//Controllers
import userController from './../app/controllers/user.controller.js';
import materiasController from './../app/controllers/materias.controller.js';


const router = Router();



router.group("/api", (router) => {
	
    apiResource("/users", userController, router);
    apiResource("/materias", materiasController, router);
	
	
});

console.log(listEndpoints(router));

export default router;