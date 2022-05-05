import express, { json } from 'express';
import morgan from 'morgan';
import apiRoutes from './routes/api.js';
import i18n from './config/locale.js';

const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());
//console.log(i18n.__("Login"));
//routes
app.use(apiRoutes);

export default app;