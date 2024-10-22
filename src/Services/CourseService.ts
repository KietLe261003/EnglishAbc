import { request } from '../Common/Config/Request';
import { CreateCourse } from '../Type/Course/Course';

export const courseService = {
  getAllCourse: async () => {
      const courses = await request.get('course').then((res)=>{
        return res.data;
      }).catch((e)=>{
        return e;
      });
      return courses;

  },
  createCourse: async (token: string, Course: CreateCourse) => {
    try {
      await request.post('http://localhost:8080/api/v1/course', Course, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      alert('Thêm khóa học thành công');
    } catch (error) {
      console.log(error);
    }
  },
};
