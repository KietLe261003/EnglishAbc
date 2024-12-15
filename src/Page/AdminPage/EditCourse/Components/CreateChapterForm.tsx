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
interface CreateChapterFormProps{
  courseId: number,
  getAllLesson: ()=>Promise<void>
}
const CreateChapterForm:React.FC<CreateChapterFormProps> = ({courseId,getAllLesson}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lessonIndex,setLessonIndex]=useState<number | null>(null);
  const [chapterName, setChapterName] = useState<string>('');
  const [chapterDescription, setChapterDescription] = useState<string>('');
  const clickSave = async ()=>{
    try {
      const res: ResponseLessonApi = await lessonService.createLesson(courseId,{
        lessonIndex: lessonIndex? lessonIndex : 0,
        name: chapterName,
        content: chapterDescription,
        status: true
      });
      console.log(res);
      alert("Thêm thành công");
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
      <Button onClick={onOpen} colorScheme='blue'>
        Tạo chương
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tạo chương cho khóa học</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form className=' py-4'>
              <div className='mb-4'>
                <label
                  htmlFor='number-input'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Vị trí của chương:
                </label>
                <input
                  type='number'
                  id='number-input'
                  aria-describedby='helper-text-explanation'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Vị trí của chương'
                  onChange={(e)=>setLessonIndex(Number(e.target.value))}
                  required
                />
              </div>
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

export default CreateChapterForm;
