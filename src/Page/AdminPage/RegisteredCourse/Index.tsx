import { useState } from 'react';
import { ResgiterCourse } from '../../../Type/RegisteredCourse/RegisteredCourse';
import TableAdmin from '../../../Components/Table/TableAdmin';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import CreateFormResgiterCourse from './Components/CreateForm';
import RemoveForm from '../../../Components/Form/RemoveForm';

function ManagementResgiteredCourse() {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [resgiteredCourseChoose, setResgiteredCourseChoose] =
    useState<ResgiterCourse | null>(null);
  const item: ResgiterCourse = {
    id: '1231',
    nameUser: 'Lê Tuấn Kiệt',
    phoneNumber: '01231243124',
    dayOfBirth: '2024/10/26',
    gender: 'Boy',
    email: 'kietle@gmail.com',
    note: 'Tôi muốn đạt 9.0 Ielts',
  };
  const resgiteredCourses = Array.from({ length: 10 }, () => {
    return item;
  });
  const columns = [
    'id',
    'nameUser',
    'phoneNumber',
    'dayOfBirth',
    'gender',
    'Action',
  ];
  const contentStatus = ['Đăng ký online', 'Đắng ký offline'];
  const clickRemove = () => {
    console.log(resgiteredCourseChoose);
  };
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Create Resgiter'
        contentStatus={contentStatus}
        setOpenForm={setDetailForm}
      />
      <TableAdmin
        setOpenFormDetail={setDetailForm}
        setOpenFormRemove={setRemoveForm}
        setItemChoose={setResgiteredCourseChoose}
        data={resgiteredCourses}
        column={columns}
      />
      <CreateFormResgiterCourse
        setOpenForm={setDetailForm}
        openForm={detailForm}
        resgiterCourseChoose={resgiteredCourseChoose}
        content='Infomation Resgiter'
      />
      <RemoveForm
        setOpenForm={setRemoveForm}
        clickRemove={clickRemove}
        openForm={removeForm}
      />
    </div>
  );
}

export default ManagementResgiteredCourse;
