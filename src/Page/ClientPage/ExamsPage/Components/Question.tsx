import React, { useState } from 'react';
import CheckButton from '../../../../Components/Button/CheckButton';
import InputDescription from '../../../../Components/Input/InputDescription';


interface QuestionProps {
  question: string;
  type: string,
  options?: { label: string; key: string }[];
  name: string;
  onChange: (key: string | null) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onChange,type }) => {
  const [ans,setAns]=useState<string>("");
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-lg mb-4">{question}</h2>
      {
        type==="WRITING"? <InputDescription title='Viết câu trả lời' content='Viết bài tiểu luận' placeholder='Nhập câu trả lời' setContent={setAns}/>:
        options && <CheckButton data={options} onChange={onChange} />
      }
    </div>
  );
};

export default Question;
