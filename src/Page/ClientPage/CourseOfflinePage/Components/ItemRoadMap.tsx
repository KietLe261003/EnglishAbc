import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Accordion,
} from '@chakra-ui/react';
import { useState } from 'react';
interface ItemRoadMapProp {
  content: string;
  descript: string;
}
const ItemRoadMap: React.FC<ItemRoadMapProp> = ({
  descript,
  content,
}) => {
  const [colorOpen,setColorOpen]=useState<string>("#FB9400");
  const changeOpen = ()=>{
    if(colorOpen==="#FB9400")
    {
      setColorOpen("#ECEBE9");
    }
    else
    {
      setColorOpen("#FB9400")
    }
  }
  return (
    <>
      <li className='border-l-2 border-slate-300 w-full'>
        <div className='md:flex flex-start relative'>
          <div className={`absolute top-4 bg-[${colorOpen}] w-7 h-7 md:flex items-center justify-center rounded-full -ml-3.5 xs:hidden`}></div>
          <div className='w-7 h-7'></div>
          <div className=' flex flex-col w-full'>
            <Accordion defaultIndex={[0]} allowMultiple marginBottom={'48px'}>
              <AccordionItem border='none'>
                <h2>
                  <AccordionButton
                    bg={colorOpen}
                    borderRadius='full'
                    _hover={colorOpen}
                    p={4}
                    onClick={changeOpen}
                  >
                    <Box as='span' flex='1' textAlign='left' color={'white'} fontWeight={'bold'}>
                      {content}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} borderRadius='full'>
                  {descript}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </li>
    </>
  );
};

export default ItemRoadMap;
