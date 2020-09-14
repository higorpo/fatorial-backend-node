import { Request, Response } from 'express';

class FactorialController {
    compute(request: Request, response: Response) {
        console.log(request.query);
        return response.send("ok, it's working!");
    }
}

export default FactorialController;