import "reflect-metadata";

import express from 'express';

import 'express-async-errors'
import './database'
import { router } from "./routes";
import { errorHandler } from "./middlewares/ErrorMiddleware";

const port = 3333;
const app = express();

app.use(express.json())
app.use('/api', router)
app.use(errorHandler)

app.listen(port, () => console.log(`server is running on port ${port}`));