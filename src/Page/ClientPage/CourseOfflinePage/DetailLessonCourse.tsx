import { useParams } from 'react-router-dom';
import ListProduct from '../../../Components/List/ListProduct';

function DetailLessonCourse() {
  const {courseId}=useParams();
  
  return (
    <div className='flex'>
      <div className=''>
        <section className='bg-white dark:bg-gray-900'>
          <div className=' container  mx-auto'>
            <div className=''>
              <ListProduct courseId={Number(courseId)}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailLessonCourse;
