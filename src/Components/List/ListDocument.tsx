import { useEffect, useMemo, useState } from "react";
import LessonCard from "../CardItem/LessonCard";
import { useNavigate } from "react-router-dom";
import { ListDocumentObject } from "../../Type/Object/ListDocumentObject";
interface ListDocumentProps {
    checkAll: boolean,
    listData: ListDocumentObject[] | null
}

const ListDocument:React.FC<ListDocumentProps>=({checkAll,listData})=> {
    const listDocumentTmp: ListDocumentObject[] | null = useMemo(
        () => listData,
        [listData] 
      );
    const [listDocument,setListDocument]=useState(listDocumentTmp);
    const navigate=useNavigate();
    const clickDocumentFreePage=()=>{
        navigate("/document/free/10");
    }
    const clickDocumentPayPage=()=>{
        navigate("/document/notbought/10");
    }
    const clickCoursePage=()=>{
        navigate("/course/offline/10");
    }
    const clickExamPage=()=>{
        navigate("/exam/10");
    }
    useEffect(()=>{
        if (!checkAll) {
            setListDocument(listDocumentTmp && listDocumentTmp.filter((item) => item.percent !== undefined));
          } else {
            setListDocument(listDocumentTmp);
          }
    },[checkAll,listDocumentTmp])
    
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-5 justify-items-center">
            {
                listDocument?.map((item,index)=>(
                    item.percent && item.type!=="exam"? 
                    <LessonCard key={index} name={item.name} description={item.description} buttonContent={item.buttonContent} percent={item.percent} clickDetail={clickDocumentFreePage}/>:
                    item.type==="course" ?
                    <LessonCard key={index} name={item.name} description={item.description} percent={item.percent} price={item.price} type={true} clickDetail={clickCoursePage}/>:
                    item.type==="documentpay" ?
                    <LessonCard key={index} name={item.name} description={item.description} percent={item.percent} price={item.price} type={false} clickDetail={clickDocumentPayPage}/>:
                    item.type==="exam" ?
                    <LessonCard key={index} name={item.name} description={item.description} buttonContent={item.buttonContent} state={item.state} clickDetail={clickExamPage}/>:
                    <LessonCard key={index} name={item.name} description={item.description} buttonContent={item.buttonContent} percent={item.percent} clickDetail={clickDocumentFreePage}/>
                ))       
            }
        </div>  
     );
}

export default ListDocument;