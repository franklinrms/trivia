import { IPlayer, PlayerSchema } from '../interfaces/IPlayerRanking';
import RankingModel from '../models/RankingModel';

export default class CarsService {
  private model: RankingModel;

  constructor() {
    this.model = new RankingModel();
  }

  public create = async (data: IPlayer): Promise<IPlayer> => {
    const parsed = PlayerSchema.safeParse(data);
    if (!parsed.success) {
      throw parsed.error;
    }
    return this.model.create(data);
  };

  public read = async () => this.model.read();
}