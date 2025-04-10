import { useNavigate, useParams } from 'react-router-dom';
import BannerMedium from '../../../Components/Banner/BannerMedium';
import FilterDetail from './Components/FilterDetail';
import ButtonDetail from './Components/ButtonDetail';
import MainContent from './Components/MainContent';
import { useEffect, useState } from 'react';
import { courseService } from '../../../Services/CourseService';
import { Course, courseResponseId } from '../../../Type/Course/Course';
import CourseCompletionForm from '../../../Components/Form/CourseCompletionForm';

function DetailCourseOfflinePage() {
  const { id } = useParams();
  const courseId = Number(id);
  const [currentContent, setCurrentContent] = useState<number>(1);
  const [course, setCourse] = useState<Course | null>(null);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const getCourse = async () => {
    try {
      const res: courseResponseId = await courseService.getCourseById(courseId);
      setCourse(res.result);
      console.log(course);
    } catch (error) {
      console.log('Lỗi lấy dữ liệu khóa học: ', error);
    }
  };
  const otherCourse = () => {
    navigate('/course/offline');
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className='flex flex-col gap-3 max-w-[1000px]'>
      <BannerMedium
        title='IELTS Intermediate'
        description='Xây dựng và phát triển vốn từ vựng cần thiết tương đương trình độ B2'
      />
      <div className='min-h-[45px]'></div>
      <FilterDetail
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      ></FilterDetail>
      <div className='min-h-[45px]'></div>
      <MainContent
        currentContent={currentContent}
        course={course}
      ></MainContent>
      <div className='min-h-[45px]'></div>
      <div className='flex justify-end gap-2'>
        <ButtonDetail onClick={otherCourse} variant='secondary' isSmall={true}>
          Khóa học khác
        </ButtonDetail>
        <ButtonDetail variant='primary' isSmall={true}>
          Đăng ký ngay
        </ButtonDetail>
        <ButtonDetail
          onClick={() => setShowForm(true)}
          variant='primary'
          isSmall={true}
        >
          Form Certificate
        </ButtonDetail>
        {showForm && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='relative bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[550px] max-h-[calc(100vh-40px)] overflow-hidden'>
              <button
                onClick={() => setShowForm(false)}
                className='absolute top-20 right-10 text-gray-500 hover:text-black text-xl'
              >
                ✖
              </button>
              <div className='mt-6'>
                <CourseCompletionForm />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailCourseOfflinePage;
