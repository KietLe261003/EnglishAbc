import React, { useEffect, useState } from 'react';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import TableAdmin from '../../../Components/Table/TableAdmin';
import RemoveForm from '../../../Components/Form/RemoveForm';
import AddNewCourse from './Components/AddNewCourse';
import { Course, courseResponse } from '../../../Type/Course/Course';
import { courseService } from '../../../Services/CourseService';
import { useAuth } from '../../../Common/Context/AuthContext';

const ListAndRemoveCourseAdmin: React.FC = () => {
  const {token,user}=useAuth();
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [courseChoose, setCourseChoose] = useState<Course | null>(null);
  const [courses,setCourses]=useState<Course [] | null>(null);
  const column = [
    'courseId',
    'name',
    'status',
    'fee',
    'quantitySession',
    'Action',
  ];
  const status = ['Status', 'Miễn Phí', 'Học phí', 'Số lượng'];
  const getAllCourse = async ()=>{
    if(user?.role?.roleId===3)
    {
      const course:courseResponse=await courseService.getAllCourseByTeacher(token);
      setCourses(course.content);
    }
    else
    {
      const course:courseResponse=await courseService.getAllCourse();
      setCourses(course.content);
    }
  }
  const removeDocument = async () => {
    if (courseChoose) {
      try {
        await courseService.deleteCourse(token,courseChoose.courseId);
        alert("Xóa thành công");
        setRemoveForm(false);
        getAllCourse();
       } catch (error) {
        console.log(error);
        alert("Xóa thất bại");
       }
    }
  };
  
  useEffect(()=>{
    getAllCourse();
  },[])
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Course'
        contentStatus={status}
        setOpenForm={setDetailForm}
      />
      {
        courses &&
        <TableAdmin
          data={courses}
          column={column}
          setOpenFormDetail={setDetailForm}
          setOpenFormRemove={setRemoveForm}
          setItemChoose={setCourseChoose}
          detail={true}
        />
      }
      <RemoveForm
        openForm={removeForm}
        setOpenForm={setRemoveForm}
        clickRemove={removeDocument}
      />
      <AddNewCourse
        openForm={detailForm}
        setOpenForm={setDetailForm}
        content='Add new document'
        courseChoose={courseChoose}
        setCourseChoose={getAllCourse}
        getAllCourse={getAllCourse}
      />
    </div>
  );
};

export default ListAndRemoveCourseAdmin;
