interface ListItemProfileProps {
  name_course: string;
  time_start: string;
  time_end: string;
  teacher: string;
  progress: number;
}

const ListItemProfile: React.FC<ListItemProfileProps> = ({
  name_course,
  time_start,
  time_end,
  teacher,
  progress,
}) => {
  return (
    <div className='max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4'>
      <div className='p-6'>
        <div className='uppercase tracking-wide text-sm text-indigo-600 font-bold mb-2'>
          {name_course}
        </div>

        <p className='text-lg font-medium text-gray-800 mb-2'>
          Thời gian học:{' '}
          <span className='font-semibold'>
            {' '}
            {time_start} - {time_end}
          </span>
        </p>
        <p className='text-sm font-bold text-gray-700 mb-4'>
          Giáo viên: {teacher}
        </p>
        <div className='mb-4'>
          <p className='text-sm text-gray-600 font-medium mb-1'>
            Tiến độ học tập: {progress}%
          </p>
          <div className='w-full bg-gray-200 rounded-full h-2.5'>
            <div
              className='bg-indigo-600 h-2.5 rounded-full'
              style={{ width: progress * 5 }}
            ></div>
          </div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button className='px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
            View Details
          </button>
          <button className='px-4 py-2 text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItemProfile;
