import React, { useState } from 'react';
import { IconFilter, IconSearch } from '../../Common/Icon/Icon';
import Button from '../Button/Button';
import Dropdown from '../Button/Dropdown';

const filterType = [
  {
    key: 'Miễn phí',
    value: 'Free',
  },
  {
    key: 'Trả phí',
    value: 'Pay',
  },
];

const filterFinal = [
  {
    key: '10%',
    value: '10',
  },
  {
    key: '20%',
    value: '20',
  },
  {
    key: '30%',
    value: '30',
  },
  {
    key: '40%',
    value: '40',
  },
  {
    key: '50%',
    value: '50',
  },
  {
    key: '60%',
    value: '60',
  },
  {
    key: '70%',
    value: '70',
  },
  {
    key: '80%',
    value: '80',
  },
  {
    key: '90%',
    value: '90',
  },
  {
    key: '100%',
    value: '100',
  },
];

const filterTeacher = [
  {
    key: 'Công nghệ thông tin',
    value: 'cntt',
  },
  {
    key: 'Tiếng anh',
    value: 'english',
  },
];

const filterStatus = [
  {
    key: 'Đầy đủ',
    value: 'Final',
  },
  {
    key: 'Đang hoàn thiện',
    value: 'InProgress',
  },
];

interface FillterProps {
  checkAll: boolean;
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterType?: React.Dispatch<React.SetStateAction<string>>;
  setFilterInProgess?: React.Dispatch<React.SetStateAction<string>>;
  setFilterTeacher?: React.Dispatch<React.SetStateAction<string>>;
  setFilterStatus?: React.Dispatch<React.SetStateAction<string>>;
  contentFilterAll?: string;
  contentFilterInProgess?: string;
}

const Fillter: React.FC<FillterProps> = ({
  checkAll,
  setCheckAll,
  setFilterType,
  setFilterInProgess,
  setFilterTeacher,
  setFilterStatus,
  contentFilterAll = 'Tất cả tài liệu',
  contentFilterInProgess = 'Tài liệu đang học',
}) => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const clickCheckAll = () => {
    setCheckAll(true);
  };
  const clickNotCheckAll = () => {
    setCheckAll(false);
  };
  const tongleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className='p-4'>
      <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row gap-3 font-bold'>
        <Button
          variant={checkAll === true ? 'primary' : 'secondary'}
          onClick={clickCheckAll}
          size='large'
        >
          {contentFilterAll}
        </Button>
        <Button
          variant={checkAll === false ? 'primary' : 'secondary'}
          onClick={clickNotCheckAll}
          textColor='#FFFFFF'
          size='large'
        >
          {contentFilterInProgess}
        </Button>
        <button
          type='button'
          className={`group text-gray-700 font-medium flex items-center px-3 py-3 rounded-full ${
            openFilter === true ? 'bg-orange-700' : 'bg-gray-300'
          }`}
          aria-controls='disclosure-1'
          aria-expanded='false'
          onClick={tongleFilter}
        >
          <IconFilter width='1.75em' height='1.75em' />
        </button>
        <div className='flex items-center flex-grow mt-3 md:mt-0'>
          <label htmlFor='voice-search' className='sr-only'>
            Search
          </label>
          <div className='flex w-full rounded-full bg-gray-300'>
            <div className='flex items-center pointer-events-none py-3 pl-7 justify-center'>
              <IconSearch width='2em' height='2em' />
            </div>
            <input
              type='text'
              id='voice-search'
              className='bg-gray-300 text-[14px] font-medium border border-transparent focus:outline-none flex-grow border-gray-300 rounded-r-full text-gray-900 text-sm pl-3 p-2.5'
              placeholder='Tìm kiếm...'
            />
          </div>
        </div>
      </div>
      <div
        className={`mt-[30px] ${openFilter === false && 'hidden'}`}
        id='disclosure-1'
      >
        <div className='max-w-5xl flex flex-col md:flex-row gap-4 w-full'>
          <Dropdown
            title='Loại tài liệu'
            data={filterType}
            onChange={setFilterType}
          ></Dropdown>
          <Dropdown
            title='Tiến độ hoàn thành'
            data={filterFinal}
            onChange={setFilterInProgess}
          ></Dropdown>
          <Dropdown
            title='Giảng viên'
            data={filterTeacher}
            onChange={setFilterTeacher}
          ></Dropdown>
          <Dropdown
            title='Trạng thái'
            data={filterStatus}
            onChange={setFilterStatus}
          ></Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Fillter;
