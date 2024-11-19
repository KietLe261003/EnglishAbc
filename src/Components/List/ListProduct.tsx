import video_test from '../../Assets/hientaidon.mp4';
import CardLesson from '../CardItem/CardLesson';
import Button from '../Button/Button';
import { IconArrowRight, IconSearch_2 } from '../../Common/Icon/Icon';
import React, { useEffect, useState } from 'react';
import cart from '../../Assets/Image/Button_cart.svg';
import filterIcon from '../../Assets/Image/Filter.png';
import { ApiResponseLesson} from '../../Type/Lesson';
import { lessonService } from '../../Services/LessonService';
import { Document } from '../../Type/Document/Document';
import { documentService } from '../../Services/DocumentService';
interface ListProductProps{
  courseId: number
}
const ListProduct:React.FC<ListProductProps> = ({courseId}) => {
  const [selectedCard, setSelectedCard] = useState<string | number | null>(
    null,
  );
  const [listDocument, setListDocument] = useState<Document[]>([]);
  const handleCardClick = (cardId: string | number) => {
    setSelectedCard(cardId);
  };

  const getAllLesson=async()=>{
    try {
      const id: number = Number(courseId);
      const res: ApiResponseLesson = await lessonService.getAllLessonByCourseId(id);
  
      const lessonIds = res.content.map((item) => item.lessonId);
      const allDocs = await Promise.all(
        lessonIds.map((lessonId) => documentService.getDocumentByLesson(lessonId))
      );
      const combinedDocuments = allDocs.flatMap((docRes) => docRes.content);
      console.log("Chưa sort ",combinedDocuments);
      const sortedDocuments = combinedDocuments.sort(
        (a, b) => a.docId-b.docId
      );
      console.log("Đã sort: ",sortedDocuments);
  
      setListDocument(sortedDocuments);
    } catch (error) {
      console.log(error);
      alert("Lấy thất bại");
    }
  }
  const renderDoc = () => {
    return listDocument.map((item, index) => (
      <CardLesson
        name={item.name}
        content={item.content}
        key={index} 
        type="Accpect"
        onClick={() => handleCardClick(0)}
      />
    ));
  };
  useEffect(()=>{
    getAllLesson();
  },[courseId])

  return (
    <div className='flex flex-col md:flex-row items-start '>
      <div className='flex-1'>
        <div className='bg-gray-100 container mx-auto py-5 md:py-10 flex justify-center h-screen'>
          <div className='w-full md:w-96 h-full flex flex-col'>
            <div className='flex items-center justify-between mb-10 px-2'>
              <button>
                <img
                  src={filterIcon}
                  alt='Filter Icon'
                  className='p-2 rounded-full shadow-md border bg-slate-300 w-10 h-10 md:w-11 md:h-11'
                />
              </button>

              <div className='relative flex-grow ml-3'>
                <input
                  type='text'
                  className='w-full py-2 px-4 bg-gray-300 rounded-full shadow-inner pl-10 outline-none'
                  placeholder='Tìm kiếm....'
                />
                <IconSearch_2 />
              </div>
            </div>

            <div
              className='w-full h-full overflow-auto shadow rounded-xl bg-white'
              id='journal-scroll'
            >
                {renderDoc()}
            </div>
          </div>
        </div>
      </div>

      <div className='ml-4 mt-4 md:mt-0'>
        <div className='relative'>
          <div>
            <video
              className={`w-full h-auto object-cover rounded-xl ${
                selectedCard ? 'opacity-45 pointer-events-none' : ''
              }`}
              controls={!selectedCard}
            >
              <source src={video_test} type='video/mp4' />
            </video>
          </div>
          {selectedCard===1 && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <img
                src={cart}
                alt='Cart Icon'
                className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 cursor-pointer transition-transform duration-300'
              />
            </div>
          )}
        </div>

        <div className='flex flex-col sm:flex-row flex-grow items-center sm:items-start'>
          <div className='font-bold text-xl md:text-2xl mt-6 md:mt-8'>20$</div>
          <div className='mt-3 md:mt-6 ml-0 sm:ml-3'>
            <Button variant={'primary'} size='medium'>
              Mua Ngay
            </Button>
          </div>
          <div className='mt-3 md:mt-6 ml-0 sm:ml-3'>
            <Button variant='secondary' size='medium'>
              Chọn tài liệu khác
            </Button>
          </div>
        </div>

        <div className='flex items-center flex-grow mt-5'>
          <div className='bg-[orange] w-2 h-8 md:w-3 md:h-10 rounded-md'></div>
          <div className='font-bold text-xl md:text-3xl ml-4 md:ml-5'>
            Conditionals
          </div>
        </div>

        <div className='mt-4 text-xs md:text-base'>
          The if clause tells you the condition (If you study hard) and the main
          clause tells you the result (you will pass your exams). The order of
          the clauses does not change the meaning.
        </div>

        <div className='flex flex-col sm:flex-row items-center sm:items-start hover:cursor-pointer sm:pl-[300px] md:pl-[400px] pt-10 md:pt-[100px]'>
          <div className='text-[orange]'>Xem thêm thông tin</div>
          <div>
            <IconArrowRight color='gray' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
