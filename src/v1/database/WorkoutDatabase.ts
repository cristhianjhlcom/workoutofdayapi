import { type Workout } from "../types/workout";
import { saveToJSONFile } from "../utils/files";
import workouts from "./db.json";

class WorkoutDatabase {
	getAllWorkouts(): Workout[] {
		return workouts.workouts;
	}

	addNewWorkout(newWorkout: Workout): Workout | undefined {
		const isAlreadyAdded =
			workouts.workouts.findIndex((workout) => {
				return workout.name === newWorkout.name;
			}) > -1;
        if (isAlreadyAdded) return;

        workouts.workouts.push(newWorkout);
        saveToJSONFile('./db.json', workouts);
        return newWorkout;
	}
}

export default new WorkoutDatabase();
