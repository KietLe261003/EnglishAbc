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
import { useState } from 'react';
import InputDescription from '../../../../../Components/Input/InputDescription';
function ModalMarkingHomeWork() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [checkPoint, setCheckPoint] = useState<boolean>(false);

  const decrement = () => {
    if (value >= 1) {
        setValue((prev) => prev - 1);
        if (checkPoint === true) setCheckPoint(false);
    } else {
        setValue(0);
        setCheckPoint(true);
    }
  };

  const increment = () => {
    if (value <= 9) {
        setValue((prev) => prev + 1);
        if (checkPoint === true) setCheckPoint(false);
    } else {
        setValue(0);
        setCheckPoint(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      if (newValue <= 10 && newValue >= 0) {
        setValue(newValue);
        if (checkPoint === true) setCheckPoint(false);
      } else {
        setValue(0);
        setCheckPoint(true);
      }
    }
  };
  return (
    <>
      <button
        onClick={onOpen}
        className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      >
        Nhận xét
      </button>
      <Modal
        closeOnOverlayClick={false}
        size={'xl'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chấm bài tập của học viên: Trung</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <div className='custom-number-input h-10 w-32 mb-10'>
              <label
                htmlFor='custom-input-number'
                className='w-full text-gray-700 text-sm font-semibold'
              >
                Điểm
              </label>
              <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                <button
                  onClick={decrement}
                  className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'
                >
                  <span className='m-auto text-2xl font-thin'>−</span>
                </button>
                <input
                  type='number'
                  className='outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700'
                  name='custom-input-number'
                  value={value}
                  onChange={handleChange}
                />
                <button
                  onClick={increment}
                  className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'
                >
                  <span className='m-auto text-2xl font-thin'>+</span>
                </button>
              </div>
            </div>
            {checkPoint && <p className='text-red-500'>Điểm phải từ 0-10</p>}
            <InputDescription
              content={comment}
              setContent={setComment}
              placeholder='Nhận xét bài làm của học viên'
            ></InputDescription>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalMarkingHomeWork;
