import React from 'react';

interface LevelProps {
  percent: number;
  bg_color?: string;
  text_color?: string;
  border_color?: string;
}

const Level: React.FC<LevelProps> = ({ percent }) => {
  return (
    <div>
      {percent < 30 ? (
        <div className='relative w-full h-[138px] sm:h-[98px] md:h-[80px] lg:h-[103px] xl:h-[138px] 2xl:h-[138px] bg-black bg-opacity-70 p-4 rounded-t-[25px]'>
          <div
            className={`absolute bottom-0 left-0 h-2 
            )} bg-[#FF774C]`}
            style={{ width: `${percent}%` }}
          ></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#FF774C] text-5xl font-bold'>
              {percent}%
            </span>
          </div>
        </div>
      ) : null}
      {percent >= 30 && percent < 70 ? (
        <div className='relative w-full h-[138px] sm:h-[98px] md:h-[80px] lg:h-[103px] xl:h-[138px] 2xl:h-[138px] bg-black bg-opacity-70 p-4 rounded-t-[25px]'>
          <div
            className='absolute bottom-0 left-0 h-2  bg-[#FB9400]'
            style={{ width: `${percent}%` }}
          ></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#FB9400] text-5xl font-bold'>
              {percent}%
            </span>
          </div>
        </div>
      ) : null}
      {percent >= 70 && percent < 100 ? (
        <div className='relative w-full h-[138px] sm:h-[98px] md:h-[80px] lg:h-[103px] xl:h-[138px] 2xl:h-[138px] bg-black bg-opacity-70 p-4 rounded-t-[25px]'>
          <div
            className='absolute bottom-0 left-0 h-2 bg-[#00A751]'
            style={{ width: `${percent}%` }}
          ></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#00A751] text-5xl font-bold'>
              {percent}%
            </span>
          </div>
        </div>
      ) : null}
      {percent == 100 ? (
        <div className='relative w-full h-[138px] sm:h-[98px] md:h-[80px] lg:h-[103px] xl:h-[138px] 2xl:h-[138px] bg-black bg-opacity-70 p-4 rounded-t-[25px]'>
          <div
            className='absolute bottom-0 left-0 h-2 bg-[#00A751]'
            style={{ width: `${percent}%` }}
          ></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#00A751] text-2xl rounded-xl font-bold px-2 py-1 '>
              Đã hoàn thành
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Level;
