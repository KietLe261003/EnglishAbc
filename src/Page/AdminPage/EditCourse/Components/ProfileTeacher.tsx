const ProfileTeacher=()=> {
    return ( 
        <div className='w-1/3 bg-white shadow-md rounded-lg p-4 text-center'>
        <img
          src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/283579103_1332300267263416_6711789697801402891_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFyI-tHUZuieaa_eArPuPTC9TYAOO7dDBH1NgA47t0MEQkKARdBL-iUlta5SoMNOrH4MOsZxkbFq-YUPi3jEl5x&_nc_ohc=7vkwkeDBryMQ7kNvgFcpWnf&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AbW0zcQyUnomn8KVGSYE9iY&oh=00_AYBKrHW3nRXVWBOHSk5HTcUt-zTpuTh4F3X4762iS8fFnQ&oe=675F5FB3'
          alt='User'
          className='w-20 h-20 mx-auto rounded-full'
        />
        <h3 className='mt-4 text-lg font-semibold text-black'>Quốc Trung</h3>
        <div className='flex justify-center mt-2 space-x-4'>
          <a href='#' className='text-blue-500'>
            Twitter
          </a>
          <a href='#' className='text-blue-500'>
            GitHub
          </a>
          <a href='#' className='text-blue-500'>
            LinkedIn
          </a>
        </div>
      </div>
     );
}

export default ProfileTeacher;