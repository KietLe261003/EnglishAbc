function ListStudent() {
    const listHomeWork = Array.from({ length: 5 });
    return (
      <div>
        {listHomeWork.map((item) => (
          <div className='mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden my-5 flex justify-between'>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover md:w-48'
                  src='https://randomuser.me/api/portraits/men/1.jpg'
                  alt='Event image'
                />
              </div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Đặng Bá Quốc Trung
                </div>
                <p className='block mt-1 text-lg leading-tight font-medium text-black'>
                  0938503501
                </p>
                <p className='mt-2 text-gray-500'>trungngu@gmail.com</p>
              </div>
            </div>
            <div className='flex flex-col px-8'>
              <button className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                View Details
              </button>
              <button className='mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
                Cancel 
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default ListStudent;