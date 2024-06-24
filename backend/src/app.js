import express from 'express';
import bodyParser from 'body-parser';
import cityRoutes from './routes/cityRoutes.js';
import vehicleRoutes from './routes/vehicleRoutes.js';
import cors from "cors"



const app = express();
app.use(cors())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api/cities', cityRoutes);
app.use('/api/vehicles', vehicleRoutes);

export default app;