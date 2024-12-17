function ListHomeWork() {
  const listHomeWork = Array.from({ length: 5 });
  return (
    <div>
      {listHomeWork.map((item) => (
        <div className=' bg-slate-100 rounded-xl shadow-md overflow-hidden my-5'>
          <div className='md:flex justify-between'>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                Tên bài tập: Bài tập 1
              </div>
              <p className='block mt-1 text-lg leading-tight font-medium text-black'>
                Thời gian nộp bài: 13:00 - 14:00
              </p>
              <p className='mt-2 text-gray-500'>Người giao: Dr. John Doe</p>
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
        </div>
      ))}
    </div>
  );
}

export default ListHomeWork;
