const HistoryContent = () => {
  const history = [
    { id: 1, activity: 'Completed Grammar Basics course', date: '2025-01-01' },
    {
      id: 2,
      activity: 'Achieved Certificate for Speaking Skills',
      date: '2025-01-02',
    },
    { id: 3, activity: 'Downloaded Advanced Vocabulary', date: '2025-01-03' },
  ];

  return (
    <div className='p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Activity History</h2>
      <ul className='space-y-4'>
        {history.map((item) => (
          <li
            key={item.id}
            className='flex justify-between items-center p-4 border rounded-lg hover:bg-gray-100'
          >
            <p>{item.activity}</p>
            <span className='text-sm text-gray-800'>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryContent;
