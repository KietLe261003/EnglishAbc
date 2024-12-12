import { request } from "../Common/Config/Request"
import { CreateLessonApi } from "../Type/Lesson";

export const lessonService={
    getAllLessonByCourseId: async(idCourse: number)=>{
        const res = await request.get(`/lesson/${idCourse}`);
        return res.data;
    },
    createLesson: async(idCourse: number,data:CreateLessonApi)=>{
        const dataCreate={
            lessonIndex: 3,
            name: data.name,
            content: data.content,
            status: true
        }
        const res = await request.post(`/lesson/${idCourse}`,dataCreate);
        return res.data;
    },
    updateLesson: async(idCourse: number,idRoadMap: number,data:CreateLessonApi)=>{
        const dataCreate={
            lessonIndex: 3,
            name: data.name,
            content: data.content,
            status: true
        }
        const res = await request.put(`/lesson/${idCourse}/${idRoadMap}`,dataCreate);
        return res.data;
    },
    
}