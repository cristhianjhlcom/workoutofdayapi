import workouts from './db.json';

function getAllWorkouts() {
    return workouts.workouts;
}


export default {
    getAllWorkouts,
}
