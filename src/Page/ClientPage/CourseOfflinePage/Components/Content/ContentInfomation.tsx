import React from "react";
import { Course } from "../../../../../Type/Course/Course";
import { useNavigate } from "react-router-dom";

interface ContentInfomationProps{
  course: Course | null
}
const ContentInformation: React.FC<ContentInfomationProps>=({course})=> {
  const navigate=useNavigate();
  const detailLesson=()=>{
    navigate(`/document/notbought/${course?.courseId}`);
  }
  return (
    <>
      <div className='md:flex items-start justify-center'>
        <div className='w-full'>
          <div className='border-b border-gray-200 pb-6'>
            <h1 className='lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2'>
              {course?.name}
            </h1>
          </div>
          <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
            <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
              Giáo viên
            </p>
            <div className='flex items-center justify-center'>
              <p className='text-sm leading-none text-gray-600 dark:text-gray-300'>
                Quốc Trung
              </p>
            </div>
          </div>
          <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
            <p className='text-base leading-4 text-gray-800 dark:text-gray-300'>
              Tổng số bài học
            </p>
            <div className='flex items-center justify-center'>
              <p className='text-sm leading-none text-gray-600 dark:text-gray-300 mr-3'>
                50
              </p>
            </div>
          </div>
          <div>
            <p className='xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 mb-5'>
              {course?.description}
            </p>
          </div>
          <button onClick={detailLesson} className='dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none'>
            Bắt đầu học
          </button>
        </div>
      </div>
    </>
  );
}

export default ContentInformation;
