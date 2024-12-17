import React, { useState } from "react";
import { IconWindowClose } from "../../../Common/Icon/Icon";
import CardTitleComponent from "../CardTitleComponent";
import InputOtp from "./Components/InputOtp";
import Button from "../../Button/Button";
import { UserLogup } from "../../../Type/User/UserLogup";
import { userServices } from "../../../Services/UserService";
import { useAppDispatch, useAppSelector } from "../../../Hooks/Store";
import { setCloseModal, setOpenModal } from "../../../Redux/Slice/HomeSlice";
import InputTypeString from "../../Input/InputTypeString";
interface VerifyFormProps{
  infoUser: UserLogup | null
}
const VerifyForm:React.FC<VerifyFormProps> = () => {
  const [email,setEmail]=useState<string>("");
  const [newPassword,setNewPassword]=useState<string>("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const {openModal}=useAppSelector(state=>state.counter);
  const dispath=useAppDispatch();
  const closeForm = () => {
    dispath(setCloseModal());
  };
  const clickRequestVerify = async ()=>{
    try {
      const res = await userServices.requestVerifyChangePassword(email);
      alert(res?.result);
    } catch (error) {
      console.log(error);
      alert("Gửi mail thất bại");
    }
  }
  const clickVerify = async ()=>{
    try {
      const response = await userServices.resetPassword(email,otp.join(""),newPassword);
      if(response?.result==="Change your password success")
      {
        alert(response?.result);
        setOtp(Array(6).fill(""));
        setEmail("");
        setNewPassword("");
        dispath(setOpenModal(1));
      }
      
      
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      {openModal==3 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative">
            <button
              className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
              onClick={closeForm}
            >
              <IconWindowClose />
            </button>
            {/* Auth Card Container */}
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
              {/* Auth Card */}
              <div>
                <CardTitleComponent content="Để lại thông tin" description="G-Easy sẽ liên hệ với bạn sớm nhất có thể"/>
                <div className="mt-10" >
                  <InputTypeString title="Email" content={email} setContent={setEmail} placeholder="Nhập email để nhận mã otp"></InputTypeString>
                  <Button onClick={clickRequestVerify}>Nhận mã otp</Button>
                  <InputOtp otp={otp} setOtp={setOtp}></InputOtp>
                  <InputTypeString title="Mật khẩu mới" content={newPassword} setContent={setNewPassword} placeholder="Nhập mật khẩu mới"></InputTypeString>
                  <div className=" flex justify-center">
                    <Button onClick={clickVerify}>Xác nhận</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyForm;
