import { request } from "../Common/Config/Request"

export const exerciseService={
    getAllExercise: async ()=>{
        const res = await request.get("/exercise/1");
        return res.data;
    },
    getAllQuestion: async(idExercise:number)=>{
        const res = await request.get(`/question/${idExercise}`);
        return res.data;
    }
}