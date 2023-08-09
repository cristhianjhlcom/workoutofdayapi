import Workout from '../database/Workout';

export default class WorkoutService {
	public list() {
		return Workout.getAllWorkouts();
	}

	public getOneById() {
		return;
	}

	public create() {
		return;
	}

	public updateOneById() {
		return;
	}

	public destroyOneById() {
		return;
	}
}
