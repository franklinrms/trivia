import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorMiddleware from './middleware/httpErroMiddleware';
import RankingController from './controllers/rankingController';

const app = express();
const rankingController = new RankingController();

app.use(cors());
app.use(express.json());

app.post('/ranking', rankingController.create);
app.get('/ranking', rankingController.read);

app.use(errorMiddleware);

export default app;