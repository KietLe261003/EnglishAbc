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
  function ModalCommentStudent() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comment, setComment] = useState<string>('');
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
            <ModalHeader>Nhận xét: Trung</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <InputDescription
                content={comment}
                setContent={setComment}
                placeholder='Nhận xét học viên'
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
  
  export default ModalCommentStudent;
  