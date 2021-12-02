import cors from 'cors';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(+process.env.PORT || 3000, () => console.log(`Server is started in port ${process.env.PORT}`));