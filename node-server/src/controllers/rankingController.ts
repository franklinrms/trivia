import { Request, Response } from 'express';
import RankingService from '../services/rankingService';

export default class CarsController {
  private service: RankingService;

  constructor() {
    this.service = new RankingService();
  }

  public create = async (req: Request, res: Response) => {
    const response = await this.service.create(req.body);
    return res.status(201).json(response);
  };

  public read = async (_req: Request, res: Response) => {
    const response = await this.service.read();
    return res.status(200).json(response);
  };
}