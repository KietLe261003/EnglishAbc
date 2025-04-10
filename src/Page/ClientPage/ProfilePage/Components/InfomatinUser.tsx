import { useAuth } from '../../../../Common/Context/AuthContext';

interface InforUser {
  fullname: string;
  avatarUrl?: string;
}

interface Stat {
  label: string;
  value: number;
}

interface InfomationUserProps {
  userInfo: InforUser;
  stats: Stat[];
  location: string;
}
const InfomationUser: React.FC<InfomationUserProps> = ({
  userInfo,
  stats,
  location,
}) => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full xl:w-3/12 px-4 xl:order-2 flex justify-center'>
          <div className='relative'>
            <img
              alt='User Avatar'
              src={
                userInfo.avatarUrl ||
                'https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png'
              }
              className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 xl:-ml-16 max-w-[150px]'
            />
          </div>
        </div>
        <div className='w-full xl:w-4/12 px-4 xs:text-center xl:order-3 xl:text-right xl:self-center'>
          <div className='py-6 px-3 mt-32 xl:mt-5'>
            <button
              className='bg-orange-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'
              type='button'
              onClick={handleLogout}
            >
              Đăng xuất
            </button>
          </div>
        </div>
        <div className='w-full xl:w-4/12 px-4 xl:order-1'>
          <div className='flex justify-center py-4 xl:pt-4 pt-8'>
            {stats.map((stat, index) => (
              <div key={index} className='mr-4 p-3 text-center'>
                <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                  {stat.value}
                </span>
                <span className='text-sm text-blueGray-400'>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='text-center mt-12 w-full'>
        <h3 className='text-4xl font-semibold leading-normal mb-2 text-blueGray-700'>
          {userInfo.fullname}
        </h3>
        <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
          {location}
        </div>
      </div>
    </>
  );
};

export default InfomationUser;
