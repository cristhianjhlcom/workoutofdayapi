import dotenv from "dotenv";
import express, { Express } from "express";
import v1Router from './src/v1';
import v1WorkoutRouter from './src/v1/routes/WorkoutRoutes';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.use('/api/v1', v1Router);
app.use('/api/v1/workouts', v1WorkoutRouter)

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
