import { useState } from "react";
import { IconArrowRight } from "../../../Common/Icon/Icon";

const CourseRoadMap=()=> {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
      <div className='flex flex-col rounde-lg mb-2'>
        <button
          id='dropdownDefaultButton'
          data-dropdown-toggle='dropdown'
          onClick={toggleDropdown}
          type='button'
          className='flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg'
        >
          <div className='lg:flex md:flex items-center'>
            {/* <FontAwesomeIcon className="h-12 w-12 lg:mb-0 md:mb-0 m-3" icon={faChalkboard} /> */}
            <div className='flex flex-col'>
              <div className='flex justify-start text-xl mb-2 leading-3 text-gray-700 font-bold w-full'>
                Chương 1
              </div>
              <div className='text-sm text-gray-600 w-full te'>Chương 1</div>
            </div>
          </div>
          <div className='flex flex-row mr-4 justify-center items-center gap-3'>
            <button className='bg-yellow-500 text-white py-1 px-4 rounded'>
              Sửa
            </button>
            <button className='bg-red-500 text-white py-1 px-4 rounded'>
              Xóa
            </button>
            <IconArrowRight color='black'></IconArrowRight>
          </div>
        </button>
        <div
          id='dropdown'
          className={`${
            isDropdownOpen ? '' : 'hidden'
          }  flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2`}
        >
          <ul
            className='flex flex-col gap-2 lg:p-4 p-2  rounde-lg'
            aria-labelledby='dropdownDefaultButton'
          >
            <li className='flex items-center justify-between w-full p-2 lg:rounded-full md:rounded-full hover:bg-gray-100 cursor-pointer border-2 rounded-lg'>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Lộ trình 1
              </a>
              <div className="flex gap-3">
                <button className='bg-yellow-500 text-white py-1 px-4 rounded'>
                  Sửa
                </button>
                <button className='bg-red-500 text-white py-1 px-4 rounded'>
                  Xóa
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default CourseRoadMap;