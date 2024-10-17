import img1 from '../../Assets/Image/Rectangle 178.png';
import button_play from '../../Assets/Image/Button.svg';
import video_test from '../../Assets/hientaidon.mp4';
import CardLesson from '../CardItem/CardLesson';
import Button from '../Button/Button';
import { IconArrowRight, IconSearch_2 } from '../../Common/Icon/Icon';
import { useState } from 'react';
import cart from '../../Assets/Image/Button_cart.svg';
import filterIcon from '../../Assets/Image/Filter.png';

const ListProduct = () => {
  const [selectedCard, setSelectedCard] = useState<string | number | null>(
    null,
  );

  const handleCardClick = (cardId: string | number) => {
    setSelectedCard(cardId);
  };

  return (
    <div className='flex flex-col md:flex-row items-start'>
      <div className='flex-1'>
        <div className='bg-gray-100 container mx-auto py-5 md:py-10 flex justify-center h-screen'>
          <div className='w-full md:w-96 h-full flex flex-col'>
            <div className='flex items-center justify-between mb-10 px-2'>
              <button>
                <img
                  src={filterIcon}
                  alt='Filter Icon'
                  className='bg-white p-2 rounded-full shadow-md border bg-slate-300 w-10 h-10 md:w-11 md:h-11'
                />
              </button>

              <div className='relative flex-grow ml-3'>
                <input
                  type='text'
                  className='w-full py-2 px-4 bg-gray-300 rounded-full shadow-inner pl-10 outline-none'
                  placeholder='Tìm kiếm....'
                />
                <IconSearch_2 />
              </div>
            </div>

            <div
              className='w-full h-full overflow-auto shadow rounded-xl bg-white'
              id='journal-scroll'
            >
              <div
                onClick={() => handleCardClick(0)}
                className='flex items-center rounded-xl relative border-2 border-[orange] mb-3'
              >
                <img
                  src={img1}
                  alt='Image Description'
                  className='w-1/3 h-24 md:h-32 object-cover'
                />
                <img
                  src={button_play}
                  alt='button play'
                  className='absolute inset-0 m-auto w-6 h-6 md:w-8 md:h-8 ml-10'
                />
                <div className='ml-4'>
                  <div className='font-bold'>Grammar explanation</div>
                  <div className='leading-5 text-gray-500 text-xs mt-2'>
                    {`Conditionals describe the result of a certain condition. The if clause tells you the condition (If you study hard) and the main clause tells you the result (you will pass your exams). The order of the clauses does not change the meaning.`.substring(
                      0,
                      99,
                    ) + '...'}
                  </div>
                </div>
              </div>
              <div onClick={() => handleCardClick(1)}>
                <CardLesson />
                <CardLesson />
                <CardLesson />
                <CardLesson />
                <CardLesson />
                <CardLesson />
                <CardLesson />
                <CardLesson />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ml-4 mt-4 md:mt-0'>
        <div className='relative'>
          <div>
            <video
              className={`w-full h-auto object-cover rounded-xl ${
                selectedCard ? 'opacity-45 pointer-events-none' : ''
              }`}
              controls={!selectedCard}
            >
              <source src={video_test} type='video/mp4' />
            </video>
          </div>
          {selectedCard && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <img
                src={cart}
                alt='Cart Icon'
                className='w-16 h-16 md:w-20 md:h-20 hover:scale-105 cursor-pointer transition-transform duration-300'
              />
            </div>
          )}
        </div>

        <div className='flex flex-col sm:flex-row flex-grow items-center sm:items-start'>
          <div className='font-bold text-xl md:text-2xl mt-6 md:mt-8'>20$</div>
          <div className='mt-3 md:mt-6 ml-0 sm:ml-3'>
            <Button variant={'primary'} size='medium'>
              Mua Ngay
            </Button>
          </div>
          <div className='mt-3 md:mt-6 ml-0 sm:ml-3'>
            <Button variant='secondary' size='medium'>
              Chọn tài liệu khác
            </Button>
          </div>
        </div>

        <div className='flex items-center flex-grow mt-5'>
          <div className='bg-[orange] w-2 h-8 md:w-3 md:h-10 rounded-md'></div>
          <div className='font-bold text-xl md:text-3xl ml-4 md:ml-5'>
            Conditionals
          </div>
        </div>

        <div className='mt-4 text-xs md:text-base'>
          The if clause tells you the condition (If you study hard) and the main
          clause tells you the result (you will pass your exams). The order of
          the clauses does not change the meaning.
        </div>

        <div className='flex flex-col sm:flex-row items-center sm:items-start hover:cursor-pointer sm:pl-[300px] md:pl-[400px] pt-10 md:pt-[100px]'>
          <div className='text-[orange]'>Xem thêm thông tin</div>
          <div>
            <IconArrowRight color='gray' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
