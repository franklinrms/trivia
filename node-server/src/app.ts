import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middleware/httpErroMiddleware';

const app = express();

app.use(express.json());

app.use(errorMiddleware);

export default app;