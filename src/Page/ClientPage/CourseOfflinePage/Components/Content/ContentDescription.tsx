import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
interface ContentDescriptionProps{
  content: string | undefined;
}
const ContentDescription:React.FC<ContentDescriptionProps>=({content})=> {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: [],
          initialData: content,
        }}
        onReady={(editor) => {
          editor.enableReadOnlyMode('customReadOnly');
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

export default ContentDescription;
