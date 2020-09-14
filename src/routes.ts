import { Router, Response } from 'express';

const route = Router();

route.get('/hello', (_, response: Response) => {
    return response.json({ hello: "world" });
});

export default route;