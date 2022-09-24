import { NextFunction, Request, Response } from 'express';
import HttpException from '../lib/httpException';

const errorMiddleware = (
  err: Error, 
  _req: Request, 
  res: Response, 
  _next: NextFunction,
) => {
  const { status, message } = err as HttpException;
  console.log('ERROR', message);
  res.status(status || 500).json({ message });
};

export default errorMiddleware;