import WorkoutDatabase from '../database/WorkoutDatabase';
import { type Workout } from '../types/workout';

class WorkoutService {
	public index(): Workout[] {
		return WorkoutDatabase.getAllWorkouts();
	}

	public show() {
		return;
	}

	public store() {
		return;
	}

	public update() {
		return;
	}

	public destroy() {
		return;
	}
}

export default new WorkoutService();
