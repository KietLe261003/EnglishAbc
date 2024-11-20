import { useNavigate, useParams } from "react-router-dom";
import BannerMedium from "../../../Components/Banner/BannerMedium";
import FilterDetail from "./Components/FilterDetail";
import ButtonDetail from "./Components/ButtonDetail";
import MainContent from "./Components/MainContent";
import { useEffect, useState } from "react";
import { courseService } from "../../../Services/CourseService";
import { useAuth } from "../../../Common/Context/AuthContext";
import { Course, courseResponseId} from "../../../Type/Course/Course";

function DetailCourseOfflinePage() {
    const {token}=useAuth();
    const {id}=useParams();
    const courseId=Number(id);
    const [currentContent,setCurrentContent]=useState<number>(1);
    const [course,setCourse]=useState<Course | null>(null);
    const navigate=useNavigate();
    const getCourse = async ()=>{
      try {
        const res:courseResponseId = await courseService.getCourseById(token,courseId);
        setCourse(res.result);
        console.log(course);
      } catch (error) {
        console.log("Lỗi lấy dữ liệu khóa học: ",error);
      }
    }
    const otherCourse=()=>{
      navigate("/course/offline");
    }
    useEffect(()=>{
      getCourse();
    },[])
    return (
      <div className='flex flex-col gap-3'>
        <BannerMedium
          title='IELTS Intermediate'
          description='Xây dựng và phát triển vốn từ vựng cần thiết tương đương trình độ B2'
        />
        <div className='min-h-[45px]'></div>
        <FilterDetail currentContent={currentContent} setCurrentContent={setCurrentContent}></FilterDetail>
        <div className='min-h-[45px]'></div>
        <MainContent currentContent={currentContent} course={course}></MainContent>
        <div className='min-h-[45px]'></div>
        <div className='flex justify-end gap-2'>
          <ButtonDetail
            onClick={otherCourse}
            variant='secondary'
            isSmall={true}
          >
            Khóa học khác
          </ButtonDetail>
          <ButtonDetail
            variant='primary'
            isSmall={true}
          >
            Đăng ký ngay
          </ButtonDetail>
        </div>
      </div>
    );
}

export default DetailCourseOfflinePage;