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
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        return e;
      });
    return response;
  },
  findUserByid: async(userId: number)=>{
    const response=await request.get<responseInfoUser>(`/users/${userId}`).then((res)=>{
        return res.data;
    }).catch((e)=>{
      return e;
    })
    return response;
  }
};
