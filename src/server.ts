import "reflect-metadata";

import express from 'express';

import './database'
import { router } from "./routes";

const port = 3333;
const app = express();

app.use(express.json())
app.use('/api', router)

app.listen(port, () => console.log(`server is running on port ${port}`));