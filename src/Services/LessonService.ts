import { request } from "../Common/Config/Request"

export const lessonService={
    getAllLessonByCourseId: async(idCourse: number)=>{
        const res = await request.get(`/lesson/${idCourse}`);
        return res.data;
    }
}