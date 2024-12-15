import React, { useEffect, useState } from "react";
import { IconArrowRight } from "../../../Common/Icon/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Document } from "../../../Type/Document/Document";
import { documentService } from "../../../Services/DocumentService";
import { DocumentResponseGetAll } from "../../../Type/Document/DocumentResponse";
import UpdateChapterForm from "./Components/UpdateChapterForm";
import { Button } from "@chakra-ui/react";
import CreateFormDocument from "../Document/Components/CreateFormDocument";
import RemoveForm from "../../../Components/Form/RemoveForm";
interface CourseRoadMapProps{
  courseId: number,
  idRoadMap: number,
  nameRoadMap: string,
  descriptionRoadMap: string,
  indexLesson: number,
  getAllLesson: ()=>Promise<void>
}
const CourseRoadMap:React.FC<CourseRoadMapProps>=({courseId,indexLesson,idRoadMap,nameRoadMap,descriptionRoadMap,getAllLesson})=> {
    const [detailForm, setDetailForm] = useState<boolean>(false);
    const [removeForm, setRemoveForm] = useState<boolean>(false);
    const [documentChoose, setDocumentChoose] = useState<Document | null>(null);
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [listDocument, setListDocument] = useState<Document[]>([]);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const clickOpenCreateDocument=()=>{
      setDetailForm(true);
    }
    const getAllDocumentByLesson= async ()=>{
      const res:DocumentResponseGetAll=await documentService.getDocumentByLesson(idRoadMap);
      setListDocument(res.content);
    }
    const removeDocument = async () => {
      if (documentChoose) {
         try {
          await documentService.deleteDocument(documentChoose.docId);
          alert("Xóa thành công");
          setRemoveForm(false);
          getAllDocumentByLesson();
         } catch (error) {
          console.error("Error removing document:", error);
          alert("Xóa thất bại");
         }
      }
    };
    useEffect(()=>{
      getAllDocumentByLesson();
    },[idRoadMap])
    return (
      <div className='flex flex-col rounde-lg mb-2'>
        <button
          id='dropdownDefaultButton'
          data-dropdown-toggle='dropdown'
          onClick={toggleDropdown}
          type='button'
          className='flex items-center justify-between w-full bg-white p-5 lg:rounded-full md:rounded-full  cursor-pointer border-2'
        >
          <div className='lg:flex md:flex flex items-center'>
            <FontAwesomeIcon
              className='h-12 w-12 lg:mb-0 md:mb-0 mx-3'
              icon={faChalkboard}
            />
            <div>
              <div className='flex justify-start text-xl mb-2 leading-3 text-gray-700 font-bold w-full'>
                {nameRoadMap}
              </div>
              <div className='text-sm text-gray-600 w-full'>
                {descriptionRoadMap}
              </div>
            </div>
          </div>
          <div className='flex flex-row mr-4 justify-center items-center gap-3'>
            <UpdateChapterForm
              courseId={courseId}
              idRoadMap={idRoadMap}
              indexLesson={indexLesson}
              name={nameRoadMap}
              content={descriptionRoadMap}
              getAllLesson={getAllLesson}
            />
            <Button colorScheme='red'>Xóa</Button>
            <IconArrowRight color='black'></IconArrowRight>
          </div>
        </button>
        <div
          id='dropdown'
          className={`${
            isDropdownOpen ? '' : 'hidden'
          }  flex flex-col gap-4 rounde-lg pl-5`}
        >
          <ul
            className='flex flex-col gap-2 lg:p-4 p-2  rounde-lg'
            aria-labelledby='dropdownDefaultButton'
          >
            {listDocument.map((item, index) => (
              <li
                key={index}
                className='flex items-center bg-white justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg'
              >
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black'
                >
                  {item.name}
                </a>
                <div className='flex gap-3'>
                  <button
                    onClick={() => {
                      setDocumentChoose(item);
                      setDetailForm(true);
                    }}
                    className='bg-yellow-500 text-white py-1 px-4 rounded'
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => {
                      setDocumentChoose(item);
                      setRemoveForm(true);
                    }}
                    className='bg-red-500 text-white py-1 px-4 rounded'
                  >
                    Xóa
                  </button>
                </div>
              </li>
            ))}
            <li
              onClick={clickOpenCreateDocument}
              className='flex items-center bg-white w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg'
            >
              <FontAwesomeIcon className='h-6 w-6 mr-4 ml-3' icon={faPlus} />
              <button className='block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black'>
                Thêm tài liệu
              </button>
            </li>
          </ul>
        </div>
        <RemoveForm
          openForm={removeForm}
          setOpenForm={setRemoveForm}
          clickRemove={removeDocument}
        />
        <CreateFormDocument
          lessonId={idRoadMap}
          openForm={detailForm}
          setOpenForm={setDetailForm}
          content='Add new document'
          documentChoose={documentChoose}
          setDocumentChoose={setDocumentChoose}
          getAllDocument={getAllDocumentByLesson}
        />
      </div>
    );
}

export default CourseRoadMap;