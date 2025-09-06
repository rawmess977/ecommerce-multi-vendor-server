import express from 'express';
import dotenv from 'dotenv'
import router from './routes/authRoutes.js';

dotenv.config();
const app = express()


app.use('/api', router)

const port = process.env.PORT || 3000;


app.listen(port, ()=>console.log(`Server is running in port `, port))