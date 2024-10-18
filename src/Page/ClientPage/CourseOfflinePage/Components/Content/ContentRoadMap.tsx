import ItemRoadMap from "../ItemRoadMap";

function ContentRoadMap() {
  const RoadMap = [
    {
      step: 1,
      content: 'Mở đầu khóa học',
      descript: 'Mở đầu khóa học',
    },
    {
      step: 2,
      content: 'Mở đầu khóa học',
      descript: 'Nội dung khóa học',
    },
    {
      step: 3,
      content: 'Mở đầu khóa học',
      descript: 'Cam kết sau khóa học',
    },
  ]
  return (
    <div className='flex flex-col justify-start text-base text-gray-600 dark:text-gray-400 list-none'>
      {
        RoadMap.map((item,index)=>(
          <ItemRoadMap key={index} content={item.content} descript={item.descript}></ItemRoadMap>
        ))
      }
    </div>
  );
}

export default ContentRoadMap;
