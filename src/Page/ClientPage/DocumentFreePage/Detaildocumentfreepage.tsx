import BannerMedium from '../../../Components/Banner/BannerMedium';
import Button from '../../../Components/Button/Button';
import { FaChevronRight } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Document } from '../../../Type/Document/Document';
import { documentService } from '../../../Services/DocumentService';
import { DocumentResponse } from '../../../Type/Document/DocumentResponse';
import { useAuth } from '../../../Common/Context/AuthContext';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
const editorConfiguration = {
  toolbar: {
      items: [
      ],
      shouldNotGroupWhenFull: true
  },
  contentsCss: ["./test.css"],
};
const Detaidocumentfreepage = () => {
  const { id } = useParams();
  const documentId = Number(id);
  const { token } = useAuth();
  const [documentDetail, setDocumentDetail] = useState<Document | null>(null);
  const navigate = useNavigate();
  const handleClick = () => {
    alert('Button clicked!');
  };
  const getDocumentById = async () => {
    try {
      const documentResponse: DocumentResponse =
        await documentService.getDocumentById(token, documentId);
      setDocumentDetail(documentResponse.result);
    } catch (error) {
      alert('Tài liệu bị lỗi vui lòng quay lại sau');
      navigate('/document/free');
    }
  };
  useEffect(() => {
    getDocumentById();
  }, []);
  return (
    documentDetail && (
      <div className='space-y-8'>
        <BannerMedium
          title='Past continuous'
          description='Learn how to use the past continuous to talk about the past, and do the exercises to practise using it.'
        />
        <div className='flex flex-row space-x-0 sm:flex-row items-center '>
          <Button onClick={handleClick} size='large' variant='secondary'>
            Tài liệu miễn phí
          </Button>
          <FaChevronRight />
          <Button onClick={handleClick} variant='primary' size='large'>
            {documentDetail.name}
          </Button>
        </div>
        <div>
          <CKEditor
            editor={ClassicEditor}
            config={editorConfiguration}
            data={documentDetail.description}
            onReady={(editor) => {
              const editableElement = editor.ui.view.editable.element;
              if (editableElement) {
                editableElement.style.border = 'none'; 
                editableElement.style.boxShadow = 'none';
              }
            }}
            disabled
          />
        </div>
        <div className='flex flex-col space-y-6 sm:flex-col lg:flex-row lg:space-y-0 items-center justify-between'>
          <Button
            onClick={handleClick}
            size='large'
            variant='secondary'
            leftIcon={<BsDownload />}
          >
            Download
          </Button>
          <div className='flex items-center gap-x-6'>
            <Button onClick={handleClick} size='large' variant='secondary'>
              Chọn tài liệu khác
            </Button>
            <Button onClick={handleClick} size='large' variant='primary'>
              Làm bài kiểm tra
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Detaidocumentfreepage;
