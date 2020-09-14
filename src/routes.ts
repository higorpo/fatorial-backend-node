import { Router } from 'express';
import FactorialController from './controllers/Factorial';

const route = Router();

const factorialController = new FactorialController();

route.get('/factorial', factorialController.compute);

export default route;