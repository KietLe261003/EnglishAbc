import { useEffect, useState } from "react";
import BannerMedium from "../../../Components/Banner/BannerMedium";
import Fillter from "../../../Components/Filter/Fillter";
import ListDocument from "../../../Components/List/ListDocument";
import { ListDocumentObject } from "../../../Type/Object/ListDocumentObject";
import { DocumentResponseGetAll } from "../../../Type/Document/DocumentResponse";
import { documentService } from "../../../Services/DocumentService";

function DocumentPayPage() {
  const [checkAll, setCheckAll] = useState<boolean>(true);
  const [listDocument,setListDocument]=useState<ListDocumentObject[]|null>(null);
  const [filterType, setFilterType] = useState<string>("");
  const [filterInProgess, setFilterInProgess] = useState<string>("");
  const [filterTeacher, setFilterTeacher] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  console.log(filterType); //Lọc dữ liệu loại tài liệu
  console.log(filterInProgess); //Lọc dữ liệu tiến độ hoàn thành
  console.log(filterTeacher); //Lọc dữ liệu giáo viên
  console.log(filterStatus); //Lọc dữ liệu trạng thái
  const getAllDocument=async()=>{
    const documents:DocumentResponseGetAll=await documentService.getAllDocument();
    const listdoc:ListDocumentObject[]= documents.content.filter(item=>item.isFree===false).map((item)=>{ 
      const doc:ListDocumentObject={
        id: item.docId,
        name: item.name,
        description: item.description,
        buttonContent: "Xem chi tiết",
      }
      return doc;
    })
    setListDocument(listdoc);
  }
  useEffect(()=>{
    getAllDocument();
  },[])
  return (
    <div className="flex flex-col gap-3">
      <BannerMedium
        title="Tài liệu trả phí"
        description="Bộ tài liệu trả phí"
      />
      <div className="min-h-[45px]"></div>
      <Fillter
        checkAll={checkAll}
        setCheckAll={setCheckAll}
        setFilterType={setFilterType}
        setFilterTeacher={setFilterTeacher}
        setFilterInProgess={setFilterInProgess}
        setFilterStatus={setFilterStatus}
        contentFilterAll="Tài liệu mới"
      ></Fillter>
      <div className="min-h-[45px]"></div>
      <ListDocument checkAll={checkAll} listData={listDocument}></ListDocument>
    </div>
  );
}

export default DocumentPayPage;
