import { useParams } from "react-router-dom";
import BannerMedium from "../../../Components/Banner/BannerMedium";
import FilterDetail from "./Components/FilterDetail";
import ButtonDetail from "./Components/ButtonDetail";
import MainContent from "./Components/MainContent";
import { useEffect, useState } from "react";

function DetailCourseOfflinePage() {
    const {id}=useParams();
    const [currentContent,setCurrentContent]=useState<number>(1);
    return (
      <div className='flex flex-col gap-3'>
        <BannerMedium
          title='IELTS Intermediate'
          description='Xây dựng và phát triển vốn từ vựng cần thiết tương đương trình độ B2'
        />
        <div className='min-h-[45px]'></div>
        <FilterDetail currentContent={currentContent} setCurrentContent={setCurrentContent}></FilterDetail>
        <div className='min-h-[45px]'></div>
        <MainContent currentContent={currentContent}></MainContent>
        <div className='min-h-[45px]'></div>
        <div className='flex justify-end gap-2'>
          <ButtonDetail
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