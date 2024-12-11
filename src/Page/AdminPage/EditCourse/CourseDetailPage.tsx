import { useNavigate } from "react-router-dom";
import CourseRoadMap from "./CourseRoadMap";

const CourseDetailPage = () => {

  const navigate = useNavigate();
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
          <img src='' alt='User' className='w-20 h-20 mx-auto rounded-full' />
          <h3 className='mt-4 text-lg font-semibold'>admin</h3>
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

      <div className='mt-6'>
        <button
        onClick={() => {navigate('/admin/chapterform')}}
        className='bg-blue-500 text-white py-2 px-4 rounded'>
          Tạo Chương
        </button>
      </div>
      <CourseRoadMap></CourseRoadMap>
    </div>
  );
};

export default CourseDetailPage;
