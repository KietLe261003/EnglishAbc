interface FillterProfileProp{
  listTab: string[],
  openTab: string,
  setOpenTab: React.Dispatch<React.SetStateAction<string>>,
}
const FillterProfile:React.FC<FillterProfileProp>=({listTab,openTab,setOpenTab}) =>{

  return (
    <div className='border-b border-b-gray-200 w-full'>
      <ul className='-mb-px flex items-center gap-4 sm:gap-2 xs:gap-0 text-sm font-medium'>
        {listTab.map((item, index) => (
          <li className='flex-1'>
            <button
              key={index}
              onClick={() => {
                setOpenTab(item);
              }}
              className={`flex items-center justify-center w-full gap-2 px-1 py-3 hover:text-blue-700 ${
                openTab == item &&
                'relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-blue-700  text-blue-700'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FillterProfile;
