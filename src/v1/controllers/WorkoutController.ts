import { Request, Response } from "express";
import WorkoutService from "../services/WorkoutService";

interface ControllerInterface {
    service: WorkoutService;
    index: (req: Request, res: Response) => void;
    show: (req: Request, res: Response) => void;
    store: (req: Request, res: Response) => void;
    update: (req: Request, res: Response) => void;
    destroy: (req: Request, res: Response) => void;
}

class WorkoutController implements ControllerInterface {
    service: WorkoutService;

    constructor() {
        this.service = new WorkoutService();
        console.log(new WorkoutService());
    }

    // Listar todos los ejercicios.
    public index(_req: Request, res: Response) {
        const workouts = this.service.list();
        res.send('all workouts');
    }

    // Mostrar un solo ejercicio por :id.
    public show(req: Request, res: Response) {
        const id: string = req.params.id;
        const workout = this.service.getOneById();
        res.send(`show workout with id ${id}`);
    }

    // Crear un nuevo ejercicio del dia.
    public store(_req: Request, res: Response) {
        this.service.create();
        res.send('store workout');
    }

    // Actualizar un ejercicio por :id.
    public update(req: Request, res: Response) {
        const id: string = req.params.id;
        this.service.updateOneById();
        res.send(`update workout with id ${id}`);
    }

    // Eliminar un ejercicio por :id.
    public destroy(req: Request, res: Response) {
        const id: string = req.params.id;
        this.service.destroyOneById();
        res.send(`destroy workout with id ${id}`);
    }
}

export default new WorkoutController();
