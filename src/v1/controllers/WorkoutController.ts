import { Request, Response } from "express";
import WorkoutService from "../services/WorkoutService";
import { Workout } from "../types/workout";

interface ControllerInterface {
    index: (req: Request, res: Response) => void;
    show: (req: Request, res: Response) => void;
    store: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => void;
    destroy: (req: Request, res: Response) => void;
}

class WorkoutController implements ControllerInterface {
    // Listar todos los ejercicios.
    public index(_req: Request, res: Response) {
        const workouts: Workout[] = WorkoutService.index();
        res.send({
            status: 'OK',
            data: workouts,
        });
    }

    // Mostrar un solo ejercicio por :id.
    public show(req: Request, res: Response) {
        const id: string = req.params.id;
        const workout = WorkoutService.show();
        res.send({
            status: 'OK',
            data: workout
        });
    }

    // Crear un nuevo ejercicio del dia.
    public store(req: Request, res: Response) {
        const body: Omit<Workout, 'id' | 'createdAt' | 'updatedAt'> = req.body;
        const { name, mode, equipment, exercises, trainerTips } = body;
        console.log('peticion body', req.body);
        WorkoutService.store();
        res.send('store workout');
    }

    // Actualizar un ejercicio por :id.
    public update(req: Request, res: Response) {
        const id: string = req.params.id;
        WorkoutService.update();
        res.send(`update workout with id ${id}`);
    }

    // Eliminar un ejercicio por :id.
    public destroy(req: Request, res: Response) {
        const id: string = req.params.id;
        WorkoutService.destroy();
        res.send(`destroy workout with id ${id}`);
    }
}

export default new WorkoutController();
