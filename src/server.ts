import cors from 'cors';
import 'dotenv/config';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import './database';
import { router } from './routes'
import { ErrorVivinio } from './validators/Exceptions/ErrorVivinio';

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: ErrorVivinio | any, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof ErrorVivinio) {
        if (err.message) {
          return response.status(err.code).json({
            message: err.message,
          });
        }
    
        return response.status(err.code).end();
      }
    
      return response.status(500).json({
        message: err.message || 'Internal Server Error',
      });
})

app.listen(+process.env.PORT || 3000, () => console.log(`Server is started in port ${process.env.PORT || 3000}`));