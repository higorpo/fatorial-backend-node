import { Router } from 'express';
import { query } from 'express-validator';

import FactorialController from './controllers/Factorial';

const route = Router();

const factorialController = new FactorialController();

route.get('/factorial', [
    query('number')
        .isNumeric()
        .withMessage('Você precisa fornecer um número')
        .toInt(),
], factorialController.compute);

export default route;
