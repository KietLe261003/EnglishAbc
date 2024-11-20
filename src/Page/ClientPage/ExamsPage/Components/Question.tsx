import React, { useEffect, useState } from 'react';
import CheckButton from '../../../../Components/Button/CheckButton';
import InputDescription from '../../../../Components/Input/InputDescription';
import { GrammarError } from '../../../../Type/Answer';


interface QuestionProps {
  question: string;
  type: string,
  options?: { label: string; key: string }[];
  name: string;
  onChange: (key: string | null) => void;
  error?: GrammarError[] | undefined
}

const Question: React.FC<QuestionProps> = ({ question, options, onChange, type,error }) => {
  const [ans,setAns]=useState<string>("");
  useEffect(()=>{
    onChange(ans);
  },[ans])
  return (
    <div className="p-6 bg-gray-200 rounded-lg shadow-md">
      <h2 className="text-lg mb-4">{question}</h2>
      {
        type==="WRITING"? <InputDescription content='Viết bài tiểu luận' placeholder='Nhập câu trả lời' setContent={setAns}/>:
        options && <CheckButton data={options} onChange={onChange} />
      }
      {
        error?.map((item)=>(
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div role="alert" className="relative w-full text-base font-regular px-4 py-4 rounded-lg bg-red-500 text-white flex">
                <div className=" mr-12">
                    <p className="font-bold text-black">
                        Mô tả lỗi: {item.message}
                        <div className="text-white">
                          Gợi ý:
                            {item.suggestions.map((item)=>(
                              <p>{item}</p>
                            ))}
                        </div>
                        
                    </p>
                </div>
            </div>
        </div>
        ))
      }
      
    </div>
  );
};

export default Question;
