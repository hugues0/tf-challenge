import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import logger from './helpers/logger';
import morgan from 'morgan';
import employeesRoute from './routes/employeesRoute.js';
import managersRoute from './routes/managersRoute.js';

config()

const app = express()
app.use(cors())
app.use(morgan("tiny", { stream: logger.stream }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/employees",employeesRoute)
app.use("/api/v1/auth",managersRoute);
const port  = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`))

export default app 
