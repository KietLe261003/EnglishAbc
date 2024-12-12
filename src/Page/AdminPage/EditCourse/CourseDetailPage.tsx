import { useParams } from "react-router-dom";
import CourseRoadMap from "./CourseRoadMap";
import { useEffect, useState } from "react";
import { ApiResponseLesson, Lesson } from "../../../Type/Lesson";
import { lessonService } from "../../../Services/LessonService";
import { Course, courseResponseId } from "../../../Type/Course/Course";
import { courseService } from "../../../Services/CourseService";
import { parseDateToISO } from "../../../Util/ConverStringToTime";
import ProfileTeacher from "./Components/ProfileTeacher";
import CreateChapterForm from "./Components/CreateChapterForm";

const CourseDetailPage = () => {
  const {id}=useParams();
  const [listLesson,setListLesson]=useState<Lesson[]>([]);
  const [course,setCourse]=useState<Course | null>(null);
  const getAllLesson=async()=>{
    try {
      const courseId: number = Number(id);
      const res: ApiResponseLesson = await lessonService.getAllLessonByCourseId(courseId);
      setListLesson(res.content);
    } catch (error) {
      console.log(error);
      alert("Lấy thất bại");
    }
  }
  const getCourseInfor= async ()=>{
    try {
      const courseId: number = Number(id);
      const res:courseResponseId = await courseService.getCourseById(courseId);
      setCourse(res.result);
      console.log(course);
    } catch (error) {
      console.log("Lỗi lấy dữ liệu khóa học: ",error);
    }
  } 
  useEffect(()=>{
    getAllLesson();
    getCourseInfor();
  },[])
  return (
    <div className='p-6 bg-gray-100'>
      <table className='w-full bg-white shadow-md rounded-lg border-collapse text-black'>
        <thead>
          <tr className='bg-orange-700 text-white text-left'>
            <th className='py-2 px-4 border border-gray-300'>Id</th>
            <th className='py-2 px-4 border border-gray-300'>Tiêu đề</th>
            <th className='py-2 px-4 border border-gray-300'>Thời gian học</th>
            <th className='py-2 px-4 border border-gray-300'>Loại khóa học</th>
            <th className='py-2 px-4 border border-gray-300'>
              Thời Gian bắt đầu
            </th>
            <th className='py-2 px-4 border border-gray-300'>
              Số người đăng ký
            </th>
            <th className='py-2 px-4 border border-gray-300'>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b'>
            <td className='py-2 px-4 border border-gray-300'>{id}</td>
            <td className='py-2 px-4 border border-gray-300'>{course?.name}</td>
            <td className='py-2 px-4 border border-gray-300'>5 tiếng</td>
            <td className='py-2 px-4 border border-gray-300'>{course?.type}</td>
            <td className='py-2 px-4 border border-gray-300'>
              {course?.startDatetime
                ? parseDateToISO(course.startDatetime.toString())
                : '-'}
            </td>
            <td className='py-2 px-4 border border-gray-300'>0</td>
            <td className='py-2 px-4 border border-gray-300'>
              <button
                className={`py-1 px-2 rounded text-white ${
                  course?.type ? 'bg-green-500' : 'bg-orange-500'
                }`}
              >
                {course?.type ? 'True' : 'False'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='flex mt-6'>
        <ProfileTeacher></ProfileTeacher>
        <div className='w-2/3 ml-6 bg-white shadow-md rounded-lg'>
          <textarea
            className='w-full p-4 border rounded-lg'
            // rows='6'
            placeholder='Write an article...'
          ></textarea>
        </div>
      </div>
      <div className=' my-6'>
        <CreateChapterForm courseId={Number(id)} getAllLesson={getAllLesson}/>
      </div>
      {listLesson.map((item, index) => (
        <CourseRoadMap
          key={index}
          courseId={Number(id)}
          idRoadMap={item.lessonId}
          nameRoadMap={item.name}
          descriptionRoadMap={item.content}
          getAllLesson={getAllLesson}
        />
      ))}
    </div>
  );
};

export default CourseDetailPage;
