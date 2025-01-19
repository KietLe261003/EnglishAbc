import { Select, Tooltip } from "@chakra-ui/react";
import ModalCommentStudent from "./Modal/ModalCommentStudent";

function RollCall() {
    const listHomeWork = Array.from({ length: 5 });
  return (
    <div className='flex flex-col justify-center w-full mx-auto'>
      <div className='max-w-full w-full bg-white p-6'>
        <div className='flex w-full overflow-x-auto'>
          <nav className='flex space-x-2' aria-label='Pagination'>
            <a
              href='/'
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-fuchsia-100 bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
            >
              <div className='flex flex-col items-center justify-center relative px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'>
                <div>#1</div>
                <p>20/11</p>
              </div>
            </a>
            <a
              href='/'
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
            >
              <div className='flex flex-col items-center justify-center relative px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'>
                <div>#2</div>
                <p>20/11</p>
              </div>
            </a>
            <a
              href='/'
              className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'
            >
              <div className='flex flex-col items-center justify-center relative px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10'>
                <div>#3</div>
                <p>20/11</p>
              </div>
            </a>
          </nav>
        </div>
      </div>
      <div>
        {listHomeWork.map(() => (
          <div className='mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden my-5 flex justify-between'>
            <div className='md:flex'>
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
            <div className='flex flex-col px-8 gap-3'>
              <ModalCommentStudent></ModalCommentStudent>
              <Tooltip label='Điểm danh' placement='top'>
                <Select>
                    <option value='option1'>Có mặt</option>
                    <option value='option2'>Vắng có phép</option>
                    <option value='option3'>Vắng</option>
                </Select>
            </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RollCall;
