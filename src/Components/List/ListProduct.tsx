import CardLesson from '../CardItem/CardLesson';
import {  IconSearch_2 } from '../../Common/Icon/Icon';
import React, { useEffect, useState } from 'react';
import filterIcon from '../../Assets/Image/Filter.png';
import { ApiResponseLesson} from '../../Type/Lesson';
import { lessonService } from '../../Services/LessonService';
import { Document } from '../../Type/Document/Document';
import { documentService } from '../../Services/DocumentService';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const editorConfiguration = {
  toolbar: {
      items: [
      ],
      shouldNotGroupWhenFull: true
  },
  contentsCss: ["./test.css"],
};
interface ListProductProps{
  courseId: number
}
const ListProduct:React.FC<ListProductProps> = ({courseId}) => {
  const [currentDocument,setCurrentDocument]=useState<Document | null>(null);
  const [listDocument, setListDocument] = useState<Document[]>([]);
  const handleCardClick = (docClicked:Document) => {
    setCurrentDocument(docClicked);
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
      setCurrentDocument(combinedDocuments[0]);
      setListDocument(combinedDocuments);
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
        onClick={() => handleCardClick(item)}
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
        <div className='flex items-center flex-grow mt-5'>
          <div className='bg-[orange] w-2 h-8 md:w-3 md:h-10 rounded-md'></div>
          <div className='font-bold text-xl md:text-3xl ml-4 md:ml-5'>
            {currentDocument?.name}
          </div>
        </div>
        <div className='mt-4 text-xs md:text-base'>
          <CKEditor
              editor={ClassicEditor}
              config={editorConfiguration}
              data={currentDocument?.description}
              onReady={(editor) => {
                const editableElement = editor.ui.view.editable.element;
                if (editableElement) {
                  editableElement.style.border = 'none'; 
                  editableElement.style.boxShadow = 'none';
                }
              }}
              disabled
            />
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
