import { RiCloseLargeLine } from 'react-icons/ri';
import { Course, CreateCourse, TypeCourse } from '../../../../Type/Course/Course';
import InputDescription from '../../../../Components/Input/InputDescription';
import { useEffect, useState } from 'react';
import InputTypeString from '../../../../Components/Input/InputTypeString';
import InputTypeSelect from '../../../../Components/Input/InputTypeSelect';
import InputTypeNumber from '../../../../Components/Input/InputTypeNumber';
import InputTypeDateTime from '../../../../Components/Input/InputTypeDateTime';
import InputTypeFile from '../../../../Components/Input/InputTypeFile';
import ConvertDateTime from '../../../../Util/ConvertTime';
import { courseService } from '../../../../Services/CourseService';
interface CreateFormProps {
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  content?: string;
  courseChoose?: Course | null;
}
const AddNewCourse: React.FC<CreateFormProps> = ({ openForm, setOpenForm, courseChoose }) => {
  const [name, setName] = useState<string>(courseChoose?.name || '');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [status, setStatus] = useState<string>('false');
  const [fee, setFee] = useState<number>(0);
  const [quantitySession, setQuantitySession] = useState<number>(0);
  const [startDatetime, setStartDatetime] = useState<string>('');
  const [endDatetime, setEndDatetime] = useState<string>('');
  const [file,setFile]=useState<File | undefined>();
  const statusOption = ['true', 'false'];
  const typeCourse = ['ILETS', 'TOEIC'];
  const addCourse = async ()=>{
    const typeCourse:TypeCourse =type==="ILETS" ? TypeCourse.IELTS : TypeCourse.TOEIC;
    const statusCourse:boolean= status==='true' ? true : false;
    const currentTime = ConvertDateTime(new Date);
    const newCourse:CreateCourse={
      teacher: {userId: 1},
      name,
      description,
      image,
      type: typeCourse,
      status: statusCourse,
      fee,
      quantitySession,
      startDatetime,
      endDatetime,
      createdAt: currentTime,
      updatedAt: currentTime,
    }
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiY3VzdG9tQ2xhaW0iOiJjdXN0b20iLCJpc3MiOiJBYmNfZW5nbGlzaCIsImV4cCI6MTcyODcyMjI4NSwiaWF0IjoxNzI4NzE4Njg1LCJqdGkiOiI1MzAyMGM1NS1kZjQ2LTQwNzMtYjVlOS1kMGM1MGY0MDI5YzEifQ.dkwsjqFr7P-D5g7bATMGLCpjmnm_inms4trwuJ0-8lI3LEeDsqH6i_jiyuGXhy_mgoCpZ7i-FjGu9mB6eKwBjQ'
    console.log(newCourse)
    await courseService.createCourse(token,newCourse);
    setOpenForm(false);
  }
  useEffect(()=>{
    setName(courseChoose?.name || '');
    setDescription(courseChoose?.description || '');
    setImage(courseChoose?.image || '');
    if(courseChoose?.status===true)
      setType("true");
    setType(courseChoose?.type || '');
    setFee(courseChoose?.fee || 0);
    setQuantitySession(courseChoose?.quantitySession || 0);
    setStartDatetime(courseChoose?.startDatetime || '');
    setEndDatetime(courseChoose?.endDatetime || '');
  },[courseChoose])
  return (
    openForm && (
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='border mx-auto bg-white p-8 border-black rounded-xl w-full max-w-[900px] h-auto'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl flex-1 text-center'>ADD NEWS COURSE</h2>
            <button
              className='ml-4'
              onClick={() => {
                setOpenForm(false);
              }}
            >
              <RiCloseLargeLine />
            </button>
          </div>
          <div className='space-y-2 max-h-[700px] overflow-y-auto'>
            <div>
              <InputTypeString
                title='Name Course'
                content={name}
                setContent={setName}
                placeholder='Tên của khóa học'
              />
            </div>
            <div>
              <InputDescription
                title='Detail Course'
                content={description}
                setContent={setDescription}
                placeholder='Mô tả khóa học'
              />
            </div>
            <div className='flex space-x-6'>
              <div className='w-1/2 pr-4'>
                <InputTypeSelect
                  title='Loại khóa học'
                  titleOption={typeCourse}
                  content={type}
                  setContent={setType}
                />
              </div>
              <div className='w-1/2 pr-4'>
                <InputTypeSelect
                  title='Trạng thái'
                  titleOption={statusOption}
                  content={status}
                  setContent={setStatus}
                />
              </div>
            </div>
            <div className='flex space-x-6'>
              <div className='w-1/2 pr-4'>
                <InputTypeNumber
                  title='Fee course'
                  setContent={setFee}
                  placeholder='Học phí của khóa học '
                />
              </div>
              <div className='w-1/2 pr-4'>
                <InputTypeNumber
                  title='QuantitySession'
                  setContent={setQuantitySession}
                  placeholder='Số lượng học viên'
                />
              </div>
            </div>
            <div className='flex space-x-6'>
              <div className='w-1/2 pr-4'>
                <InputTypeDateTime
                  title='Start date course'
                  content={startDatetime}
                  setContent={setStartDatetime}
                  placeholder='Ngày khai giảng'
                />
              </div>
              <div className='w-1/2 pr-4'>
                <InputTypeDateTime
                  title='End date course'
                  content={endDatetime}
                  setContent={setEndDatetime}
                  placeholder='Ngày kết thúc'
                />
              </div>
            </div>
            <div>
              <InputTypeFile image={image} setImage={setImage} setFile={setFile}/>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={()=>{setOpenForm(false)}}
                type='button'
                className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 mx-1 bg-[#ECEBE9] rounded-3xl
                          font-bold text-[#4F4B45] text-sm
                          focus:outline-none hover:bg-[#bdbcba] hover:shadow-none 
                      '
              >
                Cancel
              </button>
              <button
                onClick={addCourse}
                type='submit'
                className='min-w-[110px] min-h-[26px] py-2 mt-3 bg-[#FB9400] rounded-3xl font-bold text-white text-sm focus:outline-none hover:bg-[#E07B00] hover:shadow-none shadow-lg'
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddNewCourse;
