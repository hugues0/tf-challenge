import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const port  = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}`))

export default app 