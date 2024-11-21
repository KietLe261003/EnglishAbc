import React, { useEffect, useState } from 'react';
import Button from '../../../Components/Button/Button';
import Question from './Components/Question';
import Timer from './Components/Timer';
import { useParams } from 'react-router-dom';
import { QuestionResponse, QuestionType } from '../../../Type/Question';
import { exerciseService } from '../../../Services/ExerciseService';
import { answerService } from '../../../Services/AnswerService';
import { useAuth } from '../../../Common/Context/AuthContext';
import { convertHtmlToPlainText } from '../../../Util/ConvertHtmltoString';
import { Answer, GrammarError, ResponseDataAnswer } from '../../../Type/Answer';

const ExamsDetail: React.FC = () => {
  const { id } = useParams();
  const {token}=useAuth();
  const exersiceId = Number(id);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string | null }>({});
  const [wrongs,setWrongs]=useState<{ [key: string]: GrammarError[] | undefined }>({});
  const handleAnswerChange =(questionName: string) => (selectedKey: string | null) => {
      setAnswers((prevAnswers) => {
        const currentAnswer = prevAnswers[questionName];
        if (currentAnswer === selectedKey) {
          return { ...prevAnswers, [questionName]: null };
        } else {
          return { ...prevAnswers, [questionName]: selectedKey };
        }
      });
    };

    const handleClick = async () => {
      try {
        const grammarResults = await Promise.all(
          questions.map(async (question, index) => {
            if (question.skillType === "WRITING") {
              const content = answers[`${index}`] || ""; // Tránh lỗi undefined
              try {
                const response: Answer = await answerService.checkGrammar(
                  token,
                  question.questionId,
                  convertHtmlToPlainText(content)
                );
                return { [index]: response.grammarErrors || [] };
              } catch (error) {
                console.error(`Error checking grammar for question ${index}:`, error);
                return { [index]: [] }; // Tránh lỗi toàn bộ nếu một câu thất bại
              }
            }
            return { [index]: [] }; // Không áp dụng nếu không phải "WRITING"
          })
        );
        const newWrongs = grammarResults.reduce(
          (acc, curr) => ({ ...acc, ...curr }),
          {}
        );
        setWrongs(newWrongs);
      } catch (error) {
        alert("An error occurred during processing.");
        console.error(error);
      }
    };

  const handleCellClick = (cellNumber: number) => {
    console.log('Cell clicked:', cellNumber);
  };
  const isAnswered = (questionIndex: number) => {
    return (
      answers[`question${questionIndex}`] !== null &&
      answers[`question${questionIndex}`] !== undefined
    );
  };
  
  const getAllQuestion = async () => {
    try {
      const res: QuestionResponse = await exerciseService.getAllQuestion(exersiceId);
      const updatedQuestions = await Promise.all(
        res.content.map(async (question) => {
          if (question.questionType === "MULTIPLE_CHOICE") {
            const resAnswer: ResponseDataAnswer = await answerService.getAllAnswerOfQuestion(
              question.questionId
            );
            const options = resAnswer.content.map((item) => ({
              label: item.content,
              key: item.content,
            }));
            return { ...question, options };
          }
          return question; // Nếu không phải MULTIPLE_CHOICE, giữ nguyên.
        })
      );
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  

  const renderQuestion = (question: QuestionType, index: number) => {
    switch (question.questionType) {
      case "ESSAY":
        return (
          <Question
            key={index}
            type={question.skillType}
            question={question.text}
            name={index + ""}
            onChange={handleAnswerChange(index + "")}
            error={wrongs[`${index}`]}
          />
        );
      case "MULTIPLE_CHOICE":
        return (
          <Question
            key={index}
            type={question.skillType}
            question={question.text}
            options={question.options || []} // Sử dụng options đã được xử lý trước
            name={index + ""}
            onChange={handleAnswerChange(index + "")}
            error={wrongs[`${index}`]}
          />
        );
      default:
        return null;
    }
  };
  
  useEffect(() => {
    getAllQuestion();
  }, []);

  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold text-orange-500 mb-6'>
          Bài kiểm tra 01
        </h1>
      </div>

      <div className='flex'>
        {/* Left Side (Quiz Questions) */}
        <div className='flex-grow max-w-full mr-10'>
          <div className='space-y-8'>
            {questions.map((item,index) => (
              renderQuestion(item,index)
            ))}
          </div>
        </div>

        {/* Right Side (Timer and Calendar) */}
        <div className='w-[400px] bg-gray-100 p-5 flex flex-col h-full justify-end ml-auto'>
          {/* Timer */}
          <div className='text-center'>
            <h2 className='text-black text-lg font-bold'>Thời gian còn lại</h2>
            <Timer />
          </div>
          <div className='flex flex-col'>
            <Button onClick={handleClick} size='large' variant='secondary'>
              Tạm dừng
            </Button>
            <div className='grid grid-cols-7 mt-4 gap-2'>
              {Array.from({ length: questions.length }, (_, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ${
                    isAnswered(index + 1)
                      ? 'bg-orange-400'
                      : 'hover:bg-gray-400'
                  }`}
                  onClick={() => handleCellClick(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
            </div>

            <div className='mt-8 mr-5 flex justify-between'>
              <Button onClick={handleClick} size='large' variant='secondary'>
                Quay lại trang trước
              </Button>
              <Button onClick={handleClick} size='large' variant='primary'>
                Nộp bài
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamsDetail;
