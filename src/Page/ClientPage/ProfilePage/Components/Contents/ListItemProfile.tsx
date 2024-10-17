function ListItemProfile() {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3'>
      <div className='md:flex'>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Khóa học tiếng anh cơ bản
          </div>
          <p className='block mt-1 text-lg leading-tight font-medium text-black'>
            Thời gian học: 12/10-30/10
          </p>
          <p className='mt-2 text-gray-500'>Giáo viên: Đặng Bá Quốc Trung</p>
          <button className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
            View Details
          </button>
          <button className='mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            Cancel 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItemProfile;
