import { randomUUID } from 'crypto';
import WorkoutDatabase from '../database/WorkoutDatabase';
import { type Workout } from '../types/workout';

class WorkoutService {
	public index(): Workout[] {
		return WorkoutDatabase.getAllWorkouts();
	}

	public show() {
		return;
	}

	public store(data: Workout) {
        const newWorkout = {
            ...data,
            id: randomUUID(),
            createdAt: new Date().toLocaleString('es-PE', {timeZone: 'UTC'}),
            updatedAt: new Date().toLocaleString('es-PE', {timeZone: 'UTC'}),
        };
        const createdWorkout = WorkoutDatabase.addNewWorkout(newWorkout);
        return createdWorkout;
	}

	public update() {
		return;
	}

	public destroy() {
		return;
	}
}

export default new WorkoutService();
