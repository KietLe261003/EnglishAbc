import React, { useState } from 'react';
import { IconArrowLeft, IconDetail, IconTrash } from '../../../../Common/Icon/Icon';
import Pagination from '../../../../Components/Table/Pagination';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Box,
  } from '@chakra-ui/react';
import DetailClass from './DetailClass';
interface ListTableClassProps<T> {
  column: string[];
  data: T[];
  setOpenFormRemove: React.Dispatch<React.SetStateAction<boolean>>;
  setItemChoose: React.Dispatch<React.SetStateAction<T | null>>;
  detail?: boolean;
}

const ListTableClass = <T,>({
  data,
  column,
  setOpenFormRemove,
  setItemChoose,
}: ListTableClassProps<T>) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [drawerSize, setDrawerSize] = useState<"xl" | "full">("xl");
  const toggleFullScreen = () => {
    setDrawerSize((prevSize) => (prevSize === "xl" ? "full" : "xl")); 
  };
  const closeDrawer=()=>{
    setDrawerSize("xl");
    onClose();
  }
  return (
    <>
      <table className='rounded-t-lg m-5 w-full  mx-auto bg-[#FFF4E5] text-gray-800'>
        <thead>
          <tr className=' border-b-2 border-gray-300'>
            {column.map((item, index) => {
              return (
                <th key={index} className='px-4 py-3'>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? 'bg-gray-100 border-gray-200'
                    : 'bg-[#D6B2B2]'
                } border-b rounded-t-lg m-5 w-full  mx-auto`}
              >
                {column.map((field) => {
                  return field === 'Action' ? (
                    <td className='px-4 py-3 text-center'>
                      <button
                        ref={btnRef}
                        className='m-[15px]'
                        onClick={() => {
                          setItemChoose(item);
                          onOpen();
                        }}
                      >
                        <IconDetail />
                      </button>
                      <button
                        className='m-[15px]'
                        onClick={() => {
                          setOpenFormRemove(true);
                          setItemChoose(item);
                        }}
                      >
                        <IconTrash />
                      </button>
                    </td>
                  ) : (
                    <td className='px-4 py-3 text-center'>
                      {(item as any)[field] + ''}
                    </td> // Using 'any' to access dynamic fields
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Drawer
        isOpen={isOpen}
        placement='right' // Vị trí của Drawer: 'top', 'right', 'bottom', 'left'
        onClose={closeDrawer}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          sx={{
            width: drawerSize === 'xl' ? '70vw' : '100vw', // 70% màn hình khi 'xl', full khi 'full'
            maxWidth: drawerSize === 'xl' ? '70vw' : '100vw', // Giới hạn chiều rộng tối đa
          }}
        >
          <DrawerCloseButton />
          <DrawerHeader>Thông tin chi tiết lớp học</DrawerHeader>
          <DrawerBody>
            <Box
              position='absolute'
              top='50%'
              left='-40px'
              transform='translateY(-50%)'
            >
              <Button
                colorScheme='blue'
                size='xs'
                onClick={toggleFullScreen}
                borderRadius='full'
                title='Mở rộng'
              >
                {drawerSize === 'xl' && <IconArrowLeft />}
              </Button>
            </Box>
            <DetailClass></DetailClass>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={closeDrawer}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Pagination />
    </>
  );
};

export default ListTableClass;
