import { useEffect, useState } from 'react';
import LoginForm from '../../../Components/Form/LoginForm/LoginForm';
import RegisterForm from '../../../Components/Form/RegisterForm/RegisterForm';
import VerifyForm from '../../../Components/Form/VerifyForm/VerifyForm';
import Button from '../../../Components/Button/Button';
import { UserLogup } from '../../../Type/User/UserLogup';
import { useAppDispatch, useAppSelector } from '../../../Hooks/Store';
import { setOpenModal } from '../../../Redux/Slice/HomeSlice';
import { useAuth } from '../../../Common/Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ControllerForm = () => {
  const { user } = useAuth();
  const { openModal } = useAppSelector((state) => state.counter);
  const dispath = useAppDispatch();
  const [infoUser, setInforUser] = useState<UserLogup | null>(null);
  const navigate = useNavigate();
  const openForm = () => {
    dispath(setOpenModal(1));
    console.log(openModal);
  };
  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <>
      {user ? (  
          <img
            onClick={() => {
              navigate('/profile');
            }}
            alt='tania andrew'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
            className='relative inline-block h-12 w-12 cursor-pointer rounded-full object-cover object-center'
            data-popover-target='profile-menu'
          />
      ) : (
        <Button variant='primary' onClick={openForm}>
          Đăng nhập
        </Button>
      )}

      <LoginForm />
      <RegisterForm setInfoUser={setInforUser} />
      <VerifyForm infoUser={infoUser} />
    </>
  );
};

export default ControllerForm;
