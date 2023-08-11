import { type Workout } from "../types/workout";
import workouts from "./db.json";

class WorkoutDatabase {
	getAllWorkouts(): Workout[] {
		return workouts.workouts;
	}
}

export default new WorkoutDatabase();
