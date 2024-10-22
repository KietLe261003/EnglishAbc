import { useEffect, useState } from "react";
import InformationBio from "./Contents/InformationBio";
import FillterProfile from "./FillterProfile";
import InfomationUser from "./InfomatinUser";
import ListItemProfile from "./Contents/ListItemProfile";
import { useAuth } from "../../../../Common/Context/AuthContext";
import { useNavigate } from "react-router-dom";

function ContentProfile() {
  const {user}=useAuth();
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user)
    {
      navigate("/");
    }
  },[user])
    const listTab = [
        'Profile',
        'Courses',
        'Certificates',
        'Documents',
        'History',
      ];
      const [openTab, setOpenTab] = useState<string>(listTab[0]);
      const renderContent=()=>{
        switch (openTab) {
            case listTab[0]:
                return <InformationBio/>
            case listTab[1]:
                return <ListItemProfile/>
            default:
                return <InformationBio/>
        }
      }
    return ( 
        <section className='relative py-16 bg-blueGray-200'>
          <div className='container mx-auto px-4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
              <div className='px-6'>
                <InfomationUser/>
                <FillterProfile openTab={openTab} setOpenTab={setOpenTab} listTab={listTab}/>
                <div className='py-10 text-center'>
                  <div className='flex flex-wrap justify-center'>
                    <div className='w-full lg:w-9/12 px-3'>
                        {renderContent()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
     );
}

export default ContentProfile;