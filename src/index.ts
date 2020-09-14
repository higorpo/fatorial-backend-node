import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}!`);
})