import { useParams } from 'react-router-dom';
import ListProduct from '../../../Components/List/ListProduct';

function DetailLessonCourse() {
    const {courseId}=useParams();
  return (
    <div className='flex'>
      <div className=''>
        <section className='bg-white dark:bg-gray-900'>
          <div className=' container px-6 py-10 mx-auto'>
            <div className=''>
              <ListProduct/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailLessonCourse;
