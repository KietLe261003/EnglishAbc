import ButtonDetail from "./ButtonDetail";
interface FillterDetailProps {
  currentContent: number,
  setCurrentContent: React.Dispatch<React.SetStateAction<number>>,
}
const FilterDetail:React.FC<FillterDetailProps> = ({currentContent=1,setCurrentContent})=> {
    const filterContent=[
        {
            key: "Thông tin khóa học",
            value: 1
        },
        {
            key: "Lịch học",
            value: 2
        },
        {
            key: "Lộ trình học",
            value: 3
        },
        {
            key: "Cam kết sau khóa học",
            value: 4
        }
    ]
    return (
      <div className=" flex justify-between xs:flex-col xs:gap-3 xs:items-center lg:flex-row">
        {filterContent.map((item, index) => (
          <ButtonDetail
            key={index}
            variant={currentContent === item.value ? 'primary' : 'secondary'}
            onClick={()=>{setCurrentContent(item.value)}}
          >
            {item.key}
          </ButtonDetail>
        ))}
      </div>
    );
}

export default FilterDetail;