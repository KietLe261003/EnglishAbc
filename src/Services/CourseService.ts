import { request } from '../Common/Config/Request';
import { CreateCourse } from '../Type/Course/Course';

export const courseService = {
  getAllCourse: async () => {
    const courses = await request
      .get('course')
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        return e;
      });
    return courses;
  },
  getCourseById: async (token: string | null | undefined, courseId: number) => {
    const res = await request.get(`/course/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  },
  createCourse: async (
    token: string | null | undefined,
    Course: CreateCourse,
  ) => {
    const res = await request.post(
      'http://localhost:8080/api/v1/course',
      Course,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return res.data;
  },
  deleteCourse: async (token: string | null | undefined, id: number) => {
    const res = await request.delete(`/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  },
  updateCourse: async (
    token: string | null | undefined,
    docId: number,
    newCourse: CreateCourse,
  ) => {
    const res = await request.put(`/course/${docId}`, newCourse, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  },
};
