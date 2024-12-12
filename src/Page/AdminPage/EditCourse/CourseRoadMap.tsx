import React, { useEffect, useState } from "react";
import { IconArrowRight } from "../../../Common/Icon/Icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Document } from "../../../Type/Document/Document";
import { documentService } from "../../../Services/DocumentService";
import { DocumentResponseGetAll } from "../../../Type/Document/DocumentResponse";
import UpdateChapterForm from "./Components/UpdateChapterForm";
import { Button } from "@chakra-ui/react";
interface CourseRoadMapProps{
  courseId: number,
  idRoadMap: number,
  nameRoadMap: string,
  descriptionRoadMap: string,
  getAllLesson: ()=>Promise<void>
}
const CourseRoadMap:React.FC<CourseRoadMapProps>=({courseId,idRoadMap,nameRoadMap,descriptionRoadMap,getAllLesson})=> {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [listDocument, setListDocument] = useState<Document[]>([]);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const getAllDocumentByLesson= async ()=>{
      const res:DocumentResponseGetAll=await documentService.getDocumentByLesson(idRoadMap);
      setListDocument(res.content);
    }
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
            <FontAwesomeIcon className="h-12 w-12 lg:mb-0 md:mb-0 mx-3" icon={faChalkboard} />
            <div>
              <div className='flex justify-start text-xl mb-2 leading-3 text-gray-700 font-bold w-full'>
                {nameRoadMap}
              </div>
              <div className='text-sm text-gray-600 w-full'>{descriptionRoadMap}</div>
            </div>
          </div>
          <div className='flex flex-row mr-4 justify-center items-center gap-3'>
            <UpdateChapterForm courseId={courseId} idRoadMap={idRoadMap} name={nameRoadMap} content={descriptionRoadMap} getAllLesson={getAllLesson}/>
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
            {
              listDocument.map((item,index)=>(
                <li key={index} className='flex items-center bg-white justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg'>
                  <a
                    href='/'
                    className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black'
                  >
                    {item.name}
                  </a>
                  <div className="flex gap-3">
                    <button className='bg-yellow-500 text-white py-1 px-4 rounded'>
                      Sửa
                    </button>
                    <button className='bg-red-500 text-white py-1 px-4 rounded'>
                      Xóa
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
}

export default CourseRoadMap;