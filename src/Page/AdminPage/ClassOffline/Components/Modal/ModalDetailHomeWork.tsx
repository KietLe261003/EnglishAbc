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
import ModalMarkingHomeWork from './ModalMarkingHomeWork';
function ModalDetailHomeWork() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const listHomeWork = Array.from({ length: 5 });
  return (
    <>
      <button
        onClick={onOpen}
        className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      >
        View Details
      </button>
      <Modal
        closeOnOverlayClick={false}
        size={'xl'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Danh sách chấm bài của học viên</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {listHomeWork.map(() => (
              <div className='mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden my-5 flex justify-between'>
                <div className='md:flex'>
                  <div className='p-8'>
                    <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                      Đặng Bá Quốc Trung
                    </div>
                    <p className='block mt-1 text-lg leading-tight font-medium text-black'>
                      0938503501
                    </p>
                    <p className='mt-2 text-gray-500'>trungngu@gmail.com</p>
                  </div>
                </div>
                <div className='flex flex-col px-8 gap-2'>
                  <button className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                    Tải về
                  </button>
                  <ModalMarkingHomeWork></ModalMarkingHomeWork>
                </div>
              </div>
            ))}
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

export default ModalDetailHomeWork;
