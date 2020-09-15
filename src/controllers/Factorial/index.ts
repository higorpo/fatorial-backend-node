import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import calcFactorial from '../../utils/calcFactorial';

class FactorialController {
    compute(request: Request, response: Response) {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        const result = calcFactorial(request.query.number).toString();
        return response.json({ result });
    }
}

export default FactorialController;
