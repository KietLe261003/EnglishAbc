import { useEffect, useState } from 'react';
import InformationBio from './Contents/InformationBio';
import FillterProfile from './FillterProfile';
import InfomationUser from './InfomatinUser';
import ListItemProfile from './Contents/ListItemProfile';
import { useAuth } from '../../../../Common/Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ListCerfiticate from './Contents/ListCerfiticate';
import HistoryContent from './Contents/HistoryContent';
import DocumentContent from './Contents/DocumentContent';

function ContentProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);
  const listTab = [
    'Profile',
    'Courses',
    'Certificates',
    'Documents',
    'History',
  ];
  const userInfo = {
    fullname: 'Nguyễn Văn A',
    avatarUrl: 'https://example.com/avatar.png',
  };

  const stats = [
    { label: 'Courses', value: 22 },
    { label: 'Certificates', value: 10 },
    { label: 'Documents', value: 89 },
  ];

  const location = 'Hồ Chí Minh, Việt Nam';
  const [openTab, setOpenTab] = useState<string>(listTab[0]);
  const renderContent = () => {
    switch (openTab) {
      case listTab[0]:
        return <InformationBio />;
      case listTab[1]:
        return (
          <ListItemProfile
            name_course='Khóa học tiếng anh cơ bản'
            time_start='2024-10-12'
            time_end='2024-12-12'
            teacher='Đặng Bá Quốc Trung'
            progress={75}
          />
        );
      case listTab[2]:
        return <ListCerfiticate />;
      case listTab[3]:
        return <DocumentContent />;
      case listTab[4]:
        return <HistoryContent />;
      default:
        return <InformationBio />;
    }
  };
  return (
    <section className='relative py-16 bg-blueGray-200'>
      <div className='container mx-auto px-4'>
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
          <div className='px-6'>
            <InfomationUser
              userInfo={userInfo}
              stats={stats}
              location={location}
            />
            <FillterProfile
              openTab={openTab}
              setOpenTab={setOpenTab}
              listTab={listTab}
            />
            <div className='py-10 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-9/12 px-3'>{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentProfile;
