import { useNavigate } from 'react-router-dom';

const CreateChapterForm = () => {

  // const  [isOpen, setIsopen] = useState<boolean>(true)
  
  // const closeForm = () =>{
  //   setIsopen(false);
  // }

  // if (!isOpen) return null;

  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-blue-300 px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Tạo chương cho khóa học</h2>
          <button 
          onClick={() => {navigate('/admin/coursedetail')}}
          className="text-gray-600 hover:text-gray-900 font-bold text-lg">
            ×
          </button>
        </div>
        <form className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="chapterName"
              className="block text-sm font-medium text-gray-700"
            >
              Tên chương
            </label>
            <input
              type="text"
              id="chapterName"
              placeholder="Tên chương"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="chapterDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Mô tả ngắn gọn về chương
            </label>
            <textarea
              id="chapterDescription"
              placeholder="Mô tả ngắn gọn về chương"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white text-center py-2 rounded-md hover:bg-blue-800 transition"
          >
            Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateChapterForm;
