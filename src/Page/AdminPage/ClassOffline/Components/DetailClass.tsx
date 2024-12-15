import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import GeneralInformation from './GeneralInformation';
import CalenderClass from './CalenderClass';

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
        <Tab>Chấm bài</Tab>
        <Tab>Học viên</Tab>
        <Tab>Giảng viên</Tab>
        <Tab>Điểm danh</Tab>
        <Tab>Nhận xét</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <GeneralInformation></GeneralInformation>
        </TabPanel>
        <TabPanel>
          <CalenderClass></CalenderClass>
        </TabPanel>
        <TabPanel>
          <p>Bài tập về nhà</p>
        </TabPanel>
        <TabPanel>
          <p>Chấm bài</p>
        </TabPanel>
        <TabPanel>
          <p>Học viên</p>
        </TabPanel>
        <TabPanel>
          <p>Giảng viên</p>
        </TabPanel>
        <TabPanel>
          <p>Điểm danh</p>
        </TabPanel>
        <TabPanel>
          <p>Nhận xét</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default DetailClass;
