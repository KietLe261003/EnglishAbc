import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeBoolean from "../../../../Components/Input/InputSelectTrueFalse";
import { Document } from "../../../../Type/Document/Document";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import { DocumentRequest } from "../../../../Type/Document/DocumentResponse";
import { useAuth } from "../../../../Common/Context/AuthContext";
import { documentService } from "../../../../Services/DocumentService";

interface CreateFormDocumentProps{
    openForm: boolean,
    setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
    content?: string,
    documentChoose?: Document | null
}
const typeDocumentOption = ['PDF', 'DOC','TXT'];
const CreateFormDocument:React.FC<CreateFormDocumentProps> = ({openForm,setOpenForm,content="ADD NEWS ACCOUNT",documentChoose}) => {
  const {token}=useAuth();
  const [nameDocument, setNameDocument] = useState<string>(documentChoose?.name|| "");
  const [contentDocument, setContentDocument] = useState<string>(documentChoose?.content || "");
  const [description,setDescription]=useState<string>(documentChoose?.description || "");
  const [status,setStatus]=useState<boolean>(documentChoose?.status || true);
  const [typeDocument,setTypeDocument]=useState<'PDF' | 'DOC' | 'TXT' | string>('PDF');
  const [image,setImage]=useState<string>(documentChoose?.images || "");
  const [price,setPrice]=useState<number>(documentChoose?.price || 0);
  const [isFree,setIsFree]=useState<boolean>(documentChoose?.isFree || true);

  const closeFormModal = () => {
    console.log(price);
    setOpenForm(false);
  };
  const createDocument = async ()=>{
      const newDocument:DocumentRequest={
        name: nameDocument,
        description,
        url: "",
        images: image,
        type: typeDocument,
        status,
        isFree
      }
      try {
        await documentService.createDocument(token,newDocument);
        closeFormModal();
      } catch (error) {
        console.log(error);
        alert("Thêm tài liệu thất bại");
      }
      
  }
  useEffect(() => {
    if (documentChoose) {
      setNameDocument(documentChoose.name || "");
      setDescription(documentChoose.description || "");
      setContentDocument(documentChoose?.description || "");
      setImage(documentChoose?.images || "");
      setPrice(documentChoose?.price || 0);
      setIsFree(documentChoose?.isFree || true);
      setStatus(documentChoose?.status || true);
    }
  }, [documentChoose]);
  return (
    <>
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] rounded-3xl shadow-md lg:shadow-lg p-4 sm:p-8 lg:p-10 relative overflow-y-auto max-h-[90vh]">
          <button
            className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
            onClick={closeFormModal}
          >
            <IconWindowClose />
          </button>
          <div className="grid place-items-center mx-2 sm:my-5 max-h-[700px]">
            <div className="w-full">
              <div className="flex justify-center text-black text-[20px] sm:text-[24px] font-bold mb-4 sm:mb-6">
                {content}
              </div>
              <form className="mt-6 space-y-4" method="POST">
                <InputTypeString
                  title="Name Document"
                  content={nameDocument}
                  setContent={setNameDocument}
                  placeholder="Nhập tên của tài liệu"
                />
                <div className="grid grid-cols-3 gap-4">
                  <InputTypeBoolean
                    title="Trả phí"
                    content={isFree}
                    setContent={setIsFree}
                  />
                  <InputTypeBoolean
                    title="Trạng thái"
                    content={status}
                    setContent={setStatus}
                  />
                  <InputTypeSelect
                  title='Loại'
                  titleOption={typeDocumentOption}
                  content={typeDocument}
                  setContent={setTypeDocument}
                />
                </div>
                {isFree && (
                  <InputTypeNumber
                    title="Giá tiền"
                    setContent={setPrice}
                    placeholder="Nhập giá tiền của tài liệu"
                  />
                )}
                <InputDescription
                  title="Nội dung của tài liệu"
                  content={description}
                  setContent={setDescription}
                  placeholder="Mô tả về tài liệu học ngắn gọn"
                />
                <InputTypeFile image={image} setImage={setImage} />
                <div className="flex flex-col gap-4 sm:flex-row justify-end mt-4">
                  <button
                    type="button"
                    className="
                      w-full sm:w-auto min-h-[40px] py-2 px-4 bg-[#ECEBE9] rounded-3xl
                      font-bold text-[#4F4B45] text-sm
                      focus:outline-none hover:bg-[#bdbcba]
                    "
                    onClick={closeFormModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={createDocument}
                    className="
                      w-full sm:w-auto min-h-[40px] py-2 px-4 bg-[#FB9400] rounded-3xl
                      font-bold text-white text-sm
                      focus:outline-none hover:bg-[#E07B00]
                    "
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      )}
    </>
  );
};

export default CreateFormDocument;
