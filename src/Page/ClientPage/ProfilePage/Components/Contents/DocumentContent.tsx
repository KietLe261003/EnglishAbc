const DocumentContent = () => {
  const documents = [
    { id: 1, name: 'Grammar Basics', date: '2025-01-01', status: 'Completed' },
    {
      id: 2,
      name: 'Advanced Vocabulary',
      date: '2025-01-02',
      status: 'In Progress',
    },
    {
      id: 3,
      name: 'Speaking Guide',
      date: '2025-01-03',
      status: 'Not Started',
    },
  ];

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Your Documents</h2>
      <ul className='space-y-4'>
        {documents.map((doc) => (
          <li
            key={doc.id}
            className='flex justify-between items-center p-4 border rounded-lg hover:bg-gray-100'
          >
            <div>
              <p className='font-semibold'>{doc.name}</p>
              <p className='text-sm text-gray-500'>Uploaded on: {doc.date}</p>
            </div>
            <div className='flex items-center space-x-4'>
              <span
                className={`px-2 py-1 text-sm rounded-lg ${
                  doc.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : doc.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {doc.status}
              </span>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                View
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentContent;
