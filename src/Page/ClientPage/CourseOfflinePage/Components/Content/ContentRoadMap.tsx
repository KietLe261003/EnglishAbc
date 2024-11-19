import { useParams } from "react-router-dom";
import ItemRoadMap from "../ItemRoadMap";
import { useEffect, useState } from "react";
import { ApiResponseLesson } from "../../../../../Type/Lesson";
import { lessonService } from "../../../../../Services/LessonService";
import { documentService } from "../../../../../Services/DocumentService";
import { DocumentResponseGetAll } from "../../../../../Type/Document/DocumentResponse";
interface RoadMapImp{
  step: number,
  content: string,
  descript: string[],
}
function ContentRoadMap() {
  const {id}=useParams();
  const courseId=Number(id);
  const [RoadMap,setRoadMap]=useState<RoadMapImp[]>([]);
  
  const getAllLesson=async()=>{
    try {
      const id: number = Number(courseId);
      const res: ApiResponseLesson = await lessonService.getAllLessonByCourseId(id);
  
      const lessonIds = res.content.map((item) => item);
      const allDocs = await Promise.all(
        lessonIds.map( async (lessonId,index) => {
          const listDoc:DocumentResponseGetAll= await documentService.getDocumentByLesson(lessonId.lessonId);
          const listNameDoc=listDoc.content.map((item)=>item.name);
          const roadMapItem:RoadMapImp={
            step: index+1,
            content: lessonId.name,
            descript: listNameDoc
          }
          return roadMapItem;
        })
      );
      setRoadMap(allDocs);
    } catch (error) {
      console.log(error);
      alert("Lấy thất bại");
    }
  }
  useEffect(()=>{
    getAllLesson();
  },[courseId])
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
