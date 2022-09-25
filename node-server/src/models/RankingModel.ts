import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IPlayer } from '../interfaces/IPlayerRanking';
import MongoModel from './MongoModel';

const playersMongooseSchema = new Schema<IPlayer>({
  name: String,
  picture: String,
  score: Number,
}, { versionKey: false });

export default class RankingModel extends MongoModel<IPlayer> {
  constructor(model = mongooseCreateModel(
    'player_ranking',
    playersMongooseSchema,
  )) {
    super(model);
  }
}