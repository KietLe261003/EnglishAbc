import { Outlet } from 'react-router-dom';
import SideBarAdmin from './Components/SideBarAdmin';
import NavBarAdmin from './Components/NavBarAdmin';

function LayoutAdmin() {
  return (
    <div className='antialiased bg-gray-200 min-h-screen text-slate-300 relative'>
      <div className='grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-5 max-w-screen min-h-screen'>
        <div className='min-w-64 fixed left-0 top-0 bottom-0 overflow-auto md:max-lg:w-[250px]'>
          <SideBarAdmin />
        </div>
        {/* Content */}
        <main className='ml-[300px] col-span-12'>
          <NavBarAdmin/>
          <div className='p-5 mt-[80px] '>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default LayoutAdmin;
