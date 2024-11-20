import { useEffect, useState } from 'react';
import BannerMedium from '../../../Components/Banner/BannerMedium';
import Fillter from '../../../Components/Filter/Fillter';
import ListDocument from '../../../Components/List/ListDocument';
import { ListDocumentObject } from '../../../Type/Object/ListDocumentObject';
import { ExerciseResponse } from '../../../Type/Exercise';
import { exerciseService } from '../../../Services/ExerciseService';

function ExamsPage() {
  const [checkAll, setCheckAll] = useState<boolean>(true);
  const [listExercise,setListExercise]=useState<ListDocumentObject[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  const [filterInProgess, setFilterInProgess] = useState<string>('');
  const [filterTeacher, setFilterTeacher] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  console.log(filterType); //Lọc dữ liệu loại tài liệu
  console.log(filterInProgess); //Lọc dữ liệu tiến độ hoàn thành
  console.log(filterTeacher); //Lọc dữ liệu giáo viên
  console.log(filterStatus); //Lọc dữ liệu trạng thái
  const getAllExercise= async ()=>{
    try {
      try {
        const exersices:ExerciseResponse=await exerciseService.getAllExercise();
      const listExersiceInterface: ListDocumentObject[] = exersices.content.map(
        (item) => {
          const exercise: ListDocumentObject = {
            id: item.exerciseId,
            name: item.title,
            description: item.content,
            buttonContent: 'Xem chi tiết',
            type: 'exam',
          };
          return exercise;
        },
      );
      setListExercise(listExersiceInterface);
      } catch (error) {
        console.log(error)
        alert("Lỗi");
      }
    } catch (error) {
      console.log(error);
      alert("Api fail");
    }
  }
  useEffect(()=>{
    getAllExercise();
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
        contentFilterAll='Tất cả bài kiểm tra'
        contentFilterInProgess='Bài đang làm'
      ></Fillter>
      <div className='min-h-[45px]'></div>
      <ListDocument checkAll={checkAll} listData={listExercise}></ListDocument>
    </div>
  );
}

export default ExamsPage;
