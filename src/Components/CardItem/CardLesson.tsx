import img1 from '../../Assets/Image/Rectangle 178.png';
import button_play from '../../Assets/Image/Button.svg';
import button_cart from '../../Assets/Image/Button_cart.svg';
import React from 'react';
interface CardLessonProps{
  name: string,
  content: string,
  type: 'Accpect' | 'Deny',
  onClick: ()=> void
}
const CardLesson: React.FC<CardLessonProps> = ({ type, onClick,name,content }) => {
  return (
    <div
      className='flex items-center hover:border-2 border-[orange] rounded-xl relative mt-5'
      onClick={onClick}
    >
      <img
        src={img1}
        alt='Image Description'
        className='w-1/3 h-32 object-cover'
      />
      <img
        src={button_play}
        alt='button play'
        className='absolute inset-0 m-auto w-8 h-8 ml-10'
      />
      <div className='ml-4'>
        <div className='font-bold'>{name}</div>
        <div className='leading-5 text-gray-500 text-xs mt-2'>
          {content.substring(
            0,
            99
          ) + '...'}
        </div>
      </div>
      {type === 'Deny' && (
        <div className='absolute inset-0 bg-slate-950 bg-opacity-50 flex items-center justify-center rounded-xl'>
          <img
            src={button_cart}
            alt='Cart Icon'
            className='w-12 h-12 ml-5 hover:scale-105 cursor-pointer transition-transform duration-300'
          />
        </div>
      )}
    </div>
  );
};

export default CardLesson;
