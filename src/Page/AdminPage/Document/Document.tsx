import { useEffect, useState } from 'react';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import { Document } from '../../../Type/Document/Document';
import TableAdmin from '../../../Components/Table/TableAdmin';
import RemoveForm from '../../../Components/Form/RemoveForm';
import CreateFormDocument from './Components/CreateFormDocument';
import { documentService } from '../../../Services/DocumentService';
import { DocumentResponseGetAll } from '../../../Type/Document/DocumentResponse';
import { useAuth } from '../../../Common/Context/AuthContext';

function ManagementDocument() {
  const {token}=useAuth();
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [documentChoose, setDocumentChoose] = useState<Document | null>(null);
  const [documents,setDocuments]=useState<Document[] | null>(null);
  const column = ['docId', 'name', 'status', 'isFree', 'type', 'Action'];
  const status = ['Status', 'Miễn Phí', 'Trả phí'];
  const getAllDocument = async () : Promise<void>=>{
    const tmp:DocumentResponseGetAll = await documentService.getAllDocument();
    setDocuments(tmp.content);
  }
  const removeDocument = async () => {
    if (documentChoose) {
       try {
        await documentService.deleteDocument(token,documentChoose.docId);
        alert("Xóa thành công");
        setRemoveForm(false);
        getAllDocument();
       } catch (error) {
        alert("Xóa thất bại");
       }
    }
  };
  useEffect(()=>{
    getAllDocument();
  },[])
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Document'
        contentStatus={status}
        setOpenForm={setDetailForm}
      />
      {
        documents &&
        <TableAdmin
          data={documents}
          column={column}
          setOpenFormDetail={setDetailForm}
          setOpenFormRemove={setRemoveForm}
          setItemChoose={setDocumentChoose}
        />
      }
      <RemoveForm
        openForm={removeForm}
        setOpenForm={setRemoveForm}
        clickRemove={removeDocument}
      />
      <CreateFormDocument
        openForm={detailForm}
        setOpenForm={setDetailForm}
        content='Add new document'
        documentChoose={documentChoose}
        setDocumentChoose={setDocumentChoose}
        getAllDocument={getAllDocument}
      />
    </div>
  );
}

export default ManagementDocument;
