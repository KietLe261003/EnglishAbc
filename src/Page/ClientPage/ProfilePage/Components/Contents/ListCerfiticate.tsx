import React from 'react';

interface Certificate {
  name_course: string;
  completed: boolean;
  day_completed: string;
}

const certificates: Certificate[] = [
  {
    name_course: 'TOEIC Beginner',
    completed: true,
    day_completed: '30/12/2024',
  },
  {
    name_course: 'TOEIC Advanced',
    completed: true,
    day_completed: '30/12/2024',
  },
  {
    name_course: 'TOEIC Express',
    completed: true,
    day_completed: '30/12/2024',
  },
  {
    name_course: 'IELTS Beginner',
    completed: true,
    day_completed: '30/12/2024',
  },
  {
    name_course: 'IELTS Advanced',
    completed: true,
    day_completed: '30/12/2024',
  },
  {
    name_course: 'IELTS Express',
    completed: true,
    day_completed: '30/12/2024',
  },
];

const ListCertificate = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          className='bg-white rounded-lg shadow-md p-4 text-center border border-gray-200'
        >
          <h3 className='text-lg font-bold text-gray-800 mb-2'>
            {certificate.name_course}
          </h3>
          <p className='text-green-600 font-semibold'>Đã hoàn thành</p>
          <h3 className='text-lg font-bold text-gray-800 mb-2'>
            {certificate.day_completed}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ListCertificate;
