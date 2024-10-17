import banner from '../../Assets/Image/Rectangle 162.png';

const BannerMedium = ({
  title = 'Default Title',
  description = 'Default Description',
}) => {
  return (
    <div className='relative w-full mx-auto rounded-[36px] overflow-hidden'>
      <img
        src={banner}
        alt='Banner'
        className='w-full h-auto object-cover max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px]'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-start p-6 text-white'>
        <h2 className='text-xl sm:text-sm md:text-base lg:text-lg xl:text-3xl 2xl:text-3xl font-bold'>{title}</h2>
        <p className='text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-2'>{description}</p>
      </div>
      <div className='absolute bottom-0 w-full bg-orange-700 h-2'></div>
    </div>
  );
};

export default BannerMedium;

