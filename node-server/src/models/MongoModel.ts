import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';
import HttpException from '../lib/httpException';

export default abstract class MongoModel<T> implements Partial<IModel<T>> {
  protected model:Model<T>;

  constructor(_model:Model<T>) {
    this.model = _model;
  }

  public create = async (data:T):Promise<T> => this.model.create({ ...data });

  public read = async ():Promise<T[]> => this.model.find();
  public delete = async (id:string):Promise<T | null> => { 
    if (!isValidObjectId(id)) { 
      throw new HttpException(400, 'Id must have 24 hexadecimal characters'); 
    }

    return this.model.findOneAndDelete({ id });
  };
}