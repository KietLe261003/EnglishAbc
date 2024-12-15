import Logo from "../../../Assets/Image/Vector 8.svg";
import { siteMenuAdmin } from "../../../Common/Config/SiteMenuAdmin";
import { useAuth } from "../../../Common/Context/AuthContext";
import { IconSetting } from "../../../Common/Icon/Icon";
import { IconLight } from "../../../Common/Icon/IconSlideBarAdmin";
import ItemNavBar from "./ItemNavBar";
function SideBarAdmin() {
  const {user}=useAuth();
  return (
    <div
      id='menu'
      className='bg-backgroundsidebaradmin min-w-64 h-screen col-span-2 rounded-lg p-4 flex flex-col'
    >
      <div className='px-[40px] flex justify-center items-center'>
        <img src={Logo} alt='G-EASY English Logo' className='h-100% mr-4' />
        <ul>
          <li className='text-[25px] font-bold text-black'>G-EASY</li>
          <li className='text-[16px] font-bold text-gray-600 mr-6'>ENGLISH</li>
        </ul>
      </div>
      <div id='menu' className='flex flex-col space-y-2 my-5'>
        {siteMenuAdmin.map((item, index) => {
          if(item.role==="admin" &&user?.role?.roleId===2)
          {
              return (
                <ItemNavBar
                  key={index}
                  content={item.content}
                  icon={item.icon}
                  href={item.href}
                ></ItemNavBar>
              );
          }
          else if(item.role==="admin")
          {
            return null;
          }
          return (
            <ItemNavBar
              key={index}
              content={item.content}
              icon={item.icon}
              href={item.href}
            ></ItemNavBar>
          );
        })}
      </div>
      <div className='mt-auto flex flex-col'>
        <div className='flex justify-start'>
          <span className='text-textsidebar font-semibold text-[20px]'>Support</span>
        </div>
        <ItemNavBar content={'Get Started'} href='/' icon={<IconLight/>} />
        <ItemNavBar content={'Setting'} href='/' icon={<IconSetting/>} />
      </div>
    </div>
  );
}

export default SideBarAdmin;
