import { useState } from 'react';
import CalendarComponent from '../../../../Components/Calender/Calender';
import ProfileCard from '../../../../Components/CardItem/ProfileCard';
import InputTypeSelect from '../../../../Components/Input/InputTypeSelect';

function CalenderClass() {
  const [dataCalender, setDataCalender] = useState<number[]>([
    5, 10, 15, 20, 25,
  ]);
  const typeDocumentOption = ['Đặng Bá Quốc Trung', 'Đặng Bá Quốc Trung', 'Đặng Bá Quốc Trung'];
  const [typeDocument,setTypeDocument]=useState<'PDF' | 'DOC' | 'TXT' | string>('PDF');
  const listDayTeaching=Array.from({length: 5})
  return (
    <>
      <div className='w-full flex justify-between gap-16 xs:flex-col lg:flex-row'>
        <ProfileCard
          name='Quốc Trung'
          description='Làm thì lâu chơi thì nhanh'
          role='teacher'
          avatar='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/283579103_1332300267263416_6711789697801402891_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=_p6I4Y8hfqcQ7kNvgHkaI95&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AmsBpV2JVAkOwJ7KMWv8FqI&oh=00_AYDEskEv8gqYt7QEDi4y0L6PD5A-y1d4eppTtFODxxyH2A&oe=67631BF3'
        ></ProfileCard>
        <CalendarComponent
          dataCalender={dataCalender}
          setDataCalender={setDataCalender}
        />
      </div>
      {listDayTeaching.map((item, index) => (
        <div className='md:py-5 py-3  px-3 dark:bg-gray-700 bg-slate-100 rounded-b my-5'>
          <div className='px-4'>
            <div className=''>
              <p className='text-xs font-light leading-3 text-gray-500 dark:text-gray-300'>
                9:00 AM
              </p>
              <a className='focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2'>
                {'Buổi '+index}
              </a>
              <div className=' min-w-[200px] mb-5 flex items-center gap-4'>
                <label className='block mb-1 text-lg text-black font-medium'>
                  Giáo Viên:
                </label>
                <select
                  className='h-10 bg-gray-200 text-black text-sm border border-black rounded-xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md'
                  value={typeDocument} // Convert boolean to string for the select element
                  onChange={(e) => setTypeDocument(e.target.value)} // Convert back to boolean
                >
                  {typeDocumentOption.map((item, index) => {
                    return (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CalenderClass;
