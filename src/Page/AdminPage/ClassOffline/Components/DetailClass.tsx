import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import GeneralInformation from './GeneralInformation';
import CalenderClass from './CalenderClass';
import ListHomeWork from './ListHomeWork';
import ListStudent from './ListStudent';
import RollCall from './RollCall';

function DetailClass() {
  
  return (
    <Tabs isFitted variant='enclosed'>
      <TabList
        className='font-bold'
        mb='1em'
        display='flex'
        justifyContent='space-between'
        gap='1em'
        whiteSpace='nowrap'
        overflowX='auto'
      >
        <Tab>Thông tin chung</Tab>
        <Tab>Lịch học</Tab>
        <Tab>Bài tập về nhà</Tab>
        <Tab>Học viên</Tab>
        <Tab>Điểm danh</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {/* Thông tin chung của lớp học */}
          <GeneralInformation></GeneralInformation>
        </TabPanel>
        <TabPanel>
          {/* Lịch học và giáo viên dạy  */}
          <CalenderClass></CalenderClass>
        </TabPanel>
        <TabPanel>
          {/* Bài tập về nhà và danh chấm bài */}
          <ListHomeWork></ListHomeWork>
        </TabPanel>
        <TabPanel>
          {/* Danh sách học viên */}
          <ListStudent/> 
        </TabPanel>
        <TabPanel>
          {/* Điểm danh và nhận xét */}
          <RollCall></RollCall>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default DetailClass;
