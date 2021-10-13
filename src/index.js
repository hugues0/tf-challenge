import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import employeesRoute from './routes/employeesRoute'
import managersRoute from './routes/managersRoute'

config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/employees",employeesRoute)
app.use("/api/v1/managers",managersRoute);
const port  = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`))

export default app 