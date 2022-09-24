export interface IModel<T> {
  create(data: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>,
  update(id: string, data: T): Promise<T | null>,
  delete(id: string): Promise<T | null>,
}