import { useState } from 'react';
import { Certificate } from '../../../Type/Certificate/Certificate';
import ConvertDateTime from '../../../Util/ConvertTime';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import RemoveForm from '../../../Components/Form/RemoveForm';
import CreateForm from '../Certificate/Components/CreateForm';
import ListTableClass from './Components/ListTableClass';

function ClassOffline() {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [certificateChoose, setCertificateChoose] = useState<Certificate | null>(null);
  const item: Certificate = {
    id: '1213',
    nameUser: 'Đặng Bá Quốc Trinh',
    date: ConvertDateTime(new Date()),
    gender: 'Girl',
    TimeOfReceipt: ConvertDateTime(new Date()),
    TypeofCertification: 'IELET',
  };
  const contentStatus = ['Ielts', 'Toeic', 'Cá nhân'];
  const column = [
    'id',
    'nameUser',
    'date',
    'gender',
    'TimeofReceipt',
    'TypeofCertification',
    'Action',
  ];
  const certificates = Array.from({ length: 10 }, () => ({
    ...item,
  }));
  const clickRemove = () => {
    console.log(certificateChoose);
    setRemoveForm(false);
  };
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Class'
        contentStatus={contentStatus}
        setOpenForm={setDetailForm}
      />
      <ListTableClass
        column={column}
        data={certificates}
        setOpenFormRemove={setRemoveForm}
        setItemChoose={setCertificateChoose}
      />
      <CreateForm
        openForm={detailForm}
        setOpenForm={setDetailForm}
        certificateChoose={certificateChoose}
        content='Certificate'
      />
      <RemoveForm
        setOpenForm={setRemoveForm}
        openForm={removeForm}
        clickRemove={clickRemove}
      />
    </div>
  );
}

export default ClassOffline;
