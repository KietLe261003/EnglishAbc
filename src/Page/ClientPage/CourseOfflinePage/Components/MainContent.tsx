import { Course } from '../../../../Type/Course/Course';
import ContentCalender from './Content/ContentCalender';
import ContentDescription from './Content/ContentDescription';
import ContentInformation from './Content/ContentInfomation';
import ContentRoadMap from './Content/ContentRoadMap';

interface MainContentProps {
  currentContent: number;
  course: Course | null;
}
const MainContent: React.FC<MainContentProps> = ({ currentContent = 1,course}) => {
  console.log(course);
  const renderContent = () => {
    switch (currentContent) {
      case 1:
        return <ContentInformation course={course}/>
      case 4:
        return <ContentDescription content={course?.description}/>;
      case 3:
        return <ContentRoadMap />;
      case 2: 
        return <ContentCalender />
      default:
        <ContentCalender />;
    }
  };
  return <>{renderContent()}</>;
};

export default MainContent;
