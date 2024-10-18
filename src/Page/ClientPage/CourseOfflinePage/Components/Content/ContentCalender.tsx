import { useState } from "react";
import CalendarComponent from "../../../../../Components/Calender/Calender";
import ProfileCard from "../../../../../Components/CardItem/ProfileCard";

function ContentCalender() {
    const [dataCalender,setDataCalender]=useState<number[]>([5,10,15,20,25]);
    return ( 
        <div className="w-full flex justify-between gap-16 xs:flex-col lg:flex-row">
            <ProfileCard name="Quốc Trung" description="Làm thì lâu chơi thì nhanh" role="teacher" avatar="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/283579103_1332300267263416_6711789697801402891_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=t7xuREFNx4gQ7kNvgGVmLPv&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AGu-UgArptiBIth5SNeFhI7&oh=00_AYBHY1V1yyoMHeTesKlgjquiVVEA4oMWPyTNkcM_GTBLKw&oe=66E0CFB3"></ProfileCard>
            <CalendarComponent dataCalender={dataCalender} setDataCalender={setDataCalender}/>
        </div>
     );
}

export default ContentCalender;