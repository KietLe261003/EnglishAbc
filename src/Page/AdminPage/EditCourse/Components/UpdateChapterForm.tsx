import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { ResponseLessonApi } from '../../../../Type/Lesson';
  import { lessonService } from '../../../../Services/LessonService';
  interface UpdateChapterFormProps{
    courseId: number,
    idRoadMap: number,
    name: string,
    content: string,
    getAllLesson: ()=>Promise<void>
  }
  const UpdateChapterForm:React.FC<UpdateChapterFormProps> = ({courseId,idRoadMap,name,content,getAllLesson}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [chapterName, setChapterName] = useState<string>(name?name:'');
    const [chapterDescription, setChapterDescription] = useState<string>(content? content :'');
    const clickSave = async ()=>{
      try {
        const res: ResponseLessonApi = await lessonService.updateLesson(courseId,idRoadMap,{
          name: chapterName,
          content: chapterDescription
        });
        console.log(res);
        alert("Cập nhật thành công");
        getAllLesson();
        onClose();
      } catch (error) {
        console.log(error);
        alert("Thêm thất bại");
      }
    }
    return (
      <div>
        {/* Nút mở Modal */}
        <Button onClick={onOpen} colorScheme='yellow'>
           Sửa
        </Button>
  
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sửa chương cho khóa học</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form className=' py-4'>
                <div className='mb-4'>
                  <label
                    htmlFor='chapterName'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Tên chương
                  </label>
                  <input
                    type='text'
                    id='chapterName'
                    placeholder='Tên chương'
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500'
                    value={chapterName} 
                    onChange={(e) => setChapterName(e.target.value)} 
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='chapterDescription'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Mô tả ngắn gọn về chương
                  </label>
                  <textarea
                    id='chapterDescription'
                    placeholder='Mô tả ngắn gọn về chương'
                    className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500'
                    value={chapterDescription} 
                    onChange={(e) => setChapterDescription(e.target.value)} 
                  ></textarea>
                </div>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={clickSave}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  };
  
  export default UpdateChapterForm;
  