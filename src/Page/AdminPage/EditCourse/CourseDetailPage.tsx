import { useNavigate, useParams } from "react-router-dom";
import CourseRoadMap from "./CourseRoadMap";
import { useEffect, useState } from "react";
import { ApiResponseLesson, Lesson } from "../../../Type/Lesson";
import { lessonService } from "../../../Services/LessonService";

const CourseDetailPage = () => {
  const {id}=useParams();
  const [listLesson,setListLesson]=useState<Lesson[]>([]);
  const navigate = useNavigate();
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
  useEffect(()=>{
    getAllLesson();
  },[])
  return (
    <div className='p-6 bg-gray-100'>
      <table className='w-full bg-white shadow-md rounded-lg'>
        <thead>
          <tr className='bg-orange-700 text-white'>
            <th className='py-2 px-4'>Id</th>
            <th className='py-2 px-4'>Tiêu đề</th>
            <th className='py-2 px-4'>Thời gian học</th>
            <th className='py-2 px-4'>Loại khóa học</th>
            <th className='py-2 px-4'>Thời Gian bắt đầu</th>
            <th className='py-2 px-4'>Số người đăng ký</th>
            <th className='py-2 px-4'>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b mt-5'>
            <td className='py-2 px-4'>244ad81d-ca8d-49b2-92d5-b7c6ec22322a</td>
            <td className='py-2 px-4'>Lịch sử đăng theo chương</td>
            <td className='py-2 px-4'>0</td>
            <td className='py-2 px-4'>Miễn Phí</td>
            <td className='py-2 px-4'>-</td>
            <td className='py-2 px-4'>-</td>
            <td className='py-2 px-4'>
              <button className='bg-green-500 text-white py-1 px-2 rounded'>
                False
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='flex mt-6'>
        <div className='w-1/3 bg-white shadow-md rounded-lg p-4 text-center'>
          <img src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/283579103_1332300267263416_6711789697801402891_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFyI-tHUZuieaa_eArPuPTC9TYAOO7dDBH1NgA47t0MEQkKARdBL-iUlta5SoMNOrH4MOsZxkbFq-YUPi3jEl5x&_nc_ohc=7vkwkeDBryMQ7kNvgFcpWnf&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AbW0zcQyUnomn8KVGSYE9iY&oh=00_AYBKrHW3nRXVWBOHSk5HTcUt-zTpuTh4F3X4762iS8fFnQ&oe=675F5FB3' alt='User' className='w-20 h-20 mx-auto rounded-full' />
          <h3 className='mt-4 text-lg font-semibold text-black'>Quốc Trung</h3>
          <div className='flex justify-center mt-2 space-x-4'>
            <a href='#' className='text-blue-500'>
              Twitter
            </a>
            <a href='#' className='text-blue-500'>
              GitHub
            </a>
            <a href='#' className='text-blue-500'>
              LinkedIn
            </a>
          </div>
        </div>

        <div className='w-2/3 ml-6 bg-white shadow-md rounded-lg'>
          <textarea
            className='w-full p-4 border rounded-lg'
            // rows='6'
            placeholder='Write an article...'
          ></textarea>
        </div>
      </div>
      <div className=' my-6'>
        <button
        onClick={() => {navigate('/admin/chapterform')}}
        className='bg-blue-500 text-white py-2 px-4 rounded'>
          Tạo Chương
        </button>
      </div>
      {
        listLesson.map((item,index)=>(
          <CourseRoadMap key={index} idRoadMap={item.lessonId} nameRoadMap={item.name} descriptionRoadMap={item.content}/>
        ))
      }
    </div>
  );
};

export default CourseDetailPage;
