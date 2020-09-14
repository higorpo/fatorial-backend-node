import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

class FactorialController {
    compute(request: Request, response: Response) {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        return response.send("ok, it's working!");
    }
}

export default FactorialController;