import {  useState } from "react";
import { IconWindowClose } from "../../../Common/Icon/Icon";
import CardTitleComponent from "../CardTitleComponent";
import { useAppDispatch, useAppSelector } from "../../../Hooks/Store";
import { setCloseModal, setOpenModal } from "../../../Redux/Slice/HomeSlice";
import { responseLogin } from "../../../Type/User/User";
import { userServices } from "../../../Services/UserService";
import { useAuth } from "../../../Common/Context/AuthContext";
import { AxiosError } from "axios";

const LoginForm:React.FC = () => {
  const {login}=useAuth();
  const {openModal}=useAppSelector(state=>state.counter);
  const dispath = useAppDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [phoneNumber,setPhoneNumber]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const closeFormModal = () => {
    dispath(setCloseModal());
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const openRegisterForm = ()=>{
    dispath(setOpenModal(2));
    console.log(openModal);
  } 
  const clickLogin= async ()=>{
    try {
      const resLogin:responseLogin= await userServices.loginUser(phoneNumber,password);
      if(resLogin.code==0)
      {
        login(resLogin.result);
        dispath(setOpenModal(0));
      }
      else
      {
        alert("Đăng nhập thất bại");
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
      } else {
        console.log("Đã xảy ra lỗi không xác định:", error);
      }
    }
  }
  return (
    <>
      {openModal==1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative">
            <button
              className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            {/* Auth Card Container */}
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
              {/* Auth Card */}
              <div>
                <CardTitleComponent content="Good Morning!" description="Let’s learn English with G-easy every day"/>
                <form className="mt-10" method="POST">
                  {/* Email Input */}
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  ></label>
                  <input
                    id="account"
                    type="account"
                    name="account"
                    placeholder="Tài khoản"
                    autoComplete="account"
                    value={phoneNumber}
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                    className="
                  block w-full py-3 px-1 mt-2 
                  text-gray-800 appearance-none 
                  border rounded-xl border-[#9E988F]
                  focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                "
                    required
                  />
                  {/* Password Input */}
                  <label
                    htmlFor="password"
                    className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                  ></label>
                  <div className="relative flex items-center">
                    <input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Mật khẩu"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                      className="
                      block w-full py-3 px-4 pr-10 mt-7 
                      text-gray-800 appearance-none 
                      border rounded-xl border-[#9E988F]
                      focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                      "
                      required
                    />
                    <div
                      className="absolute right-4 top-14 transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 256 256"
                        >
                          <path
                            fill="currentColor"
                            d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="relative sm:flex sm:flex-wrap mt-2 sm:mb-4 text-sm text-center">
                    <div className="flex justify-end w-full">
                      <a
                        href="#"
                        className="text-[#9E988F] text-sm hover:underline"
                      >
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>

                  {/* Auth Button */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="
                          min-w-[110px] min-h-[26px] py-2 mt-3 mx-1 bg-[#ECEBE9] rounded-3xl
                          font-bold text-[#4F4B45] text-sm
                          focus:outline-none hover:bg-[#bdbcba] hover:shadow-none 
                      "
                      onClick={openRegisterForm}
                    >
                      Đăng ký
                    </button>
                    <button
                      type="button"
                      onClick={clickLogin}
                      className="
                          min-w-[110px] min-h-[26px] py-2 mt-3 bg-[#FB9400] rounded-3xl
                          font-bold text-white text-sm
                          focus:outline-none
                          hover:bg-[#E07B00] hover:shadow-none shadow-lg
                          "
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
