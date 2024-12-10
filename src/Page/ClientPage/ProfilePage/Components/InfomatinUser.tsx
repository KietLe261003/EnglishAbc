import { useAuth } from "../../../../Common/Context/AuthContext";

function InfomationUser() {
  const {user,logout}=useAuth();
  const Logout = ()=>{
    logout();
  }
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full xl:w-3/12 px-4 xl:order-2 flex justify-center'>
          <div className='relative'>
            <img
              alt='...'
              src='https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
              className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 xl:-ml-16 max-w-[150px]'
            />
          </div>
        </div>
        <div className='w-full xl:w-4/12 px-4 xs:text-center xl:order-3 xl:text-right xl:self-center'>
          <div className='py-6 px-3 mt-32 xl:mt-5'>
            <button
              className='bg-orange-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'
              type='button'
              onClick={Logout}
            >
              Đăng xuất
            </button>
          </div>
        </div>
        <div className='w-full xl:w-4/12 px-4 xl:order-1'>
          <div className='flex justify-center py-4 xl:pt-4 pt-8'>
            <div className='mr-4 p-3 text-center'>
              <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                22
              </span>
              <span className='text-sm text-blueGray-400'>Courses</span>
            </div>
            <div className='mr-4 p-3 text-center'>
              <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                10
              </span>
              <span className='text-sm text-blueGray-400'>Certificates</span>
            </div>
            <div className='lg:mr-4 p-3 text-center'>
              <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                89
              </span>
              <span className='text-sm text-blueGray-400'>Documents</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-12 w-full'>
        <h3 className='text-4xl font-semibold leading-normal mb-2 text-blueGray-700'>
          {user && user.fullname}
        </h3>
        <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
          Thủ Dầu Một, Bình Dương
        </div>
      </div>
    </>
  );
}

export default InfomationUser;
