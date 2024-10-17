import BannerMedium from '../../../Components/Banner/BannerMedium';
import Button from '../../../Components/Button/Button';
import { FaChevronRight } from 'react-icons/fa';
import img from '../../../Assets/Image/BoyWithLaptop.svg';
import { BsDownload } from 'react-icons/bs';

const Detaidocumentfreepage = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <div className='space-y-8'>
      <BannerMedium
        title='Past continuous'
        description='Learn how to use the past continuous to talk about the past, and do the exercises to practise using it.'
      />
      <div className='flex flex-row space-x-0 sm:flex-row items-center '>
        <Button onClick={handleClick} size='large' variant='secondary'>
          Tài liệu miễn phí
        </Button>
        <FaChevronRight />
        <Button onClick={handleClick} variant='primary' size='large'>
          Past continuous
        </Button>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-4'>PHẦN 1:</h2>
        <div className='mb-6'>
          <p>
            The past continuous is made from the past tense of the verb be and
            the –ing form of a verb
          </p>
          <ul className='list-disc list-inside ml-4 mt-2'>
            <li>I was He was She was It was</li>
            <li>You were We were They were</li>
            <li>working, playing, living, talking ...</li>
          </ul>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center '>
          <img
            src={img}
            alt=''
            className=' sm:w-50 md:w-60 lg:w-80 xl:w-64 2xl:w-80 h-auto'
          />
          <img
            src={img}
            alt=''
            className=' sm:w-50 md:w-60 lg:w-80 xl:w-64 2xl:w-80 h-auto'
          />
          <img
            src={img}
            alt=''
            className=' sm:w-50 md:w-60 lg:w-80 xl:w-64 2xl:w-80 h-auto'
          />
          <img
            src={img}
            alt=''
            className=' sm:w-50 md:w-60 lg:w-80 xl:w-64 2xl:w-80 h-auto'
          />
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-4'>
          PHẦN 2: We use the past continuous to talk about the past
        </h2>
        <div>
          <ul className='list-disc list-inside ml-4 mt-2'>
            <li>
              For something which happened before and after another action
            </li>
            <li>
              For something that happened before and after a specific time
            </li>
            <li>To show that something continued for some time</li>
            <li>For something that happened again and again</li>
            <li>With verbs which show change or growth</li>
          </ul>
          <p>
            We do not normally use the past continuous with stative verbs. We
            use the past simple instead
          </p>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-4'>PHẦN 3: For example</h2>
        <div>
          <ul className='list-disc list-inside ml-4 mt-2'>
            <li>The children were doing their homework when I got home.</li>
          </ul>
          <p>
            Compare: The children did their homework when (= after) I got home.
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>It was eight o'clock. I was writing a letter.</li>
          </ul>
          <p>
            Compare: At eight o'clock I wrote (= started writing) some letters.
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>Everyone was shouting.</li>
            <li>I was practising every day, three times a day.</li>
            <li>The children were growing up quickly.</li>
            <li>Her English was improving.</li>
            <li>
              When I got home, I really needed (NOT was needing) a shower.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className='text-xl font-bold mb-4'>
          PHẦN 4: Past continuous and past simple
        </h2>
        <div>
          <p>
            The past continuous and the past simple help us to show how two past
            actions or situations are connected.
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>
              When we use these two tenses together, it shows us that the past
              simple action happened in the middle of the past continuous
              action, while it was in progress.
            </li>
            <li>While I was studying, I suddenly felt sleepy.</li>
          </ul>
          <p>
            We often use these tenses to show an action interrupting another
            action.
          </p>
          <ul className='list-disc list-inside ml-4'>
            <li>I broke my leg when I was skiing.</li>
            <li>As I was going to work, I saw an old friend.</li>
            <li>We were watching television when the power went off.</li>
          </ul>
          <p>Can you see a difference in the meaning of these two sentences?</p>
          <ul className='list-disc list-inside ml-4'>
            <li>When the guests arrived, Jane was cooking dinner.</li>
            <li>When the guests arrived, Jane cooked dinner.</li>
          </ul>
          <p>
            In the first one, Jane started cooking dinner before the guests
            arrived. We know that because it uses the past continuous. In the
            second sentence, the guests arrived first and then Jane started
            cooking.
          </p>
        </div>
      </div>
      <div className='flex flex-col space-y-6 sm:flex-col lg:flex-row lg:space-y-0 items-center justify-between'>
        <Button
          onClick={handleClick}
          size='large'
          variant='secondary'
          leftIcon={<BsDownload />}
        >
          Download
        </Button>
        <div className='flex items-center gap-x-6'>
          <Button onClick={handleClick} size='large' variant='secondary'>
            Chọn tài liệu khác
          </Button>
          <Button onClick={handleClick} size='large' variant='primary'>
            Làm bài kiểm tra
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detaidocumentfreepage;
