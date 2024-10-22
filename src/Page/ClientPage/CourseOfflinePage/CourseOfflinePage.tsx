import { useEffect, useState } from 'react';
import BannerMedium from '../../../Components/Banner/BannerMedium';
import Fillter from '../../../Components/Filter/Fillter';
import ListDocument from '../../../Components/List/ListDocument';
import { courseService } from '../../../Services/CourseService';
import { courseResponse } from '../../../Type/Course/Course';
import { ListDocumentObject } from '../../../Type/Object/ListDocumentObject';

function CourseOfflinePage() {
  const [checkAll, setCheckAll] = useState<boolean>(true);
  const [listDocument,setListDocument]=useState<ListDocumentObject[] | null>(null);
  const [filterType, setFilterType] = useState<string>('');
  const [filterInProgess, setFilterInProgess] = useState<string>('');
  const [filterTeacher, setFilterTeacher] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  console.log(filterType); //Lọc dữ liệu loại tài liệu
  console.log(filterInProgess); //Lọc dữ liệu tiến độ hoàn thành
  console.log(filterTeacher); //Lọc dữ liệu giáo viên
  console.log(filterStatus); //Lọc dữ liệu trạng thái
  const getAllCourse= async ()=>{
    const courses:courseResponse= await courseService.getAllCourse();
    const listCourseInterface:ListDocumentObject[]= courses.content.map((item)=>{
        const course:ListDocumentObject={
          name: item.name,
          description: item.description,
          buttonContent: "Xem chi tiết",
          price: item.fee,
          type: "course"
        }
        return course;
    })
    setListDocument(listCourseInterface);
  }
  useEffect(()=>{
    getAllCourse();
  },[])
  return (
    <div className='flex flex-col gap-3'>
      <BannerMedium
        title='Khóa học offline'
        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
      />
      <div className='min-h-[45px]'></div>
      <Fillter
        checkAll={checkAll}
        setCheckAll={setCheckAll}
        setFilterType={setFilterType}
        setFilterTeacher={setFilterTeacher}
        setFilterInProgess={setFilterInProgess}
        setFilterStatus={setFilterStatus}
        contentFilterAll='Tất cả khóa học'
        contentFilterInProgess='Đã thanh toán'
      ></Fillter>
      <div className='min-h-[45px]'></div>
      {
        listDocument && <ListDocument checkAll={checkAll} listData={listDocument}></ListDocument>
      }
      
    </div>
  );
}

export default CourseOfflinePage;
