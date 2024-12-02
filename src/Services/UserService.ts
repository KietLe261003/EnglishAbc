import { request } from '../Common/Config/Request';
import { responseUser } from '../Type/User/ResponseUser';
import { responseInfoUser, responseLogin } from '../Type/User/User';
import { UserLogup } from '../Type/User/UserLogup';

export const userServices = {
  getAllUser: async () => {
    const response = await request
      .get<responseUser>('user/getAll')
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  },
  createUser: async (user: UserLogup) => {
    const response = await request
      .post<responseUser>('/users', user)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
    return response;
  },
  verifyUser: async (user: UserLogup | null) => {
    const response = await request
      .post<responseUser>('/users', user)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        return e;
      });
    return response;
  },
  loginUser: async (phoneNumber: string, passsword: string) => {
    const response = await request
      .post<responseLogin>('/auth/login', {
        phone: phoneNumber,
        password: passsword,
      });
    return response.data;
  },
  findUserByid: async(token: string)=>{
    const response=await request.get<responseInfoUser>(`/users/profile`,{
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
        return res.data;
    }).catch((e)=>{
      return e;
    })
    return response;
  },
  banUser: async(phone: string)=>{
    const res=await request.post('/users/ban',{phone: phone});
    return res.data;
  },
  requestVerifyChangePassword: async(email: string)=>{
    const res=await request.post('/auth/requestresetpassword',{email: email});
    return res.data;
  },
  resetPassword: async(email: string,codeVetify: string,newPassword: string)=>{
    const res=await request.post('/auth/resetPassword',{email: email,newPassword, codeVetify});
    return res.data;
  }
};
