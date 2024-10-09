import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const initContent = "- Nắm vững và thực hành chiến thuật cho hầu hết dạng câu hỏi từ đơn giản đến cao cấp của bộ môn Reading và Listening - Nắm vững cách tiếp cận hầu hết các dạng bài Writing từ đơn giản đến cao cấp - Tăng cường thực hành rèn luyện khả năng tập trung và quản lý thời gian và áp dụng chiến thuật thông qua các bài luyện tập thi thật ở tất cả các bộ môn - Làm quen với việc tương tác mô hình IELTS Computer Test";

function ContentInformation() {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [""],
          initialData: `<p>${initContent}</p>`,
        }}
        onReady={(editor) => {
          editor.enableReadOnlyMode('readOnlyMode');
        }}
        onChange={(event, editor) => {
          console.log('Change.', editor, event);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor, event);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor, event);
        }}
      />
    </>
  );
}

export default ContentInformation;
