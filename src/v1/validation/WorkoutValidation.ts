import { z } from "zod";

const WorkoutSchema = z.object({
    name: z.string(),
    mode: z.string(),
    equipment: z.string().array(),
    exercises: z.string().array(),
    trainerTips: z.string().array(),
});

export default WorkoutSchema;
