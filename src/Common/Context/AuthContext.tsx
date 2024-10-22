import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterLink } from '../../Util/RouterLink';
import { AuthResponse, responseInfoUser, User } from '../../Type/User/User';
import { userServices } from '../../Services/UserService';
interface AuthContextType {
  user: User | null | undefined;
  login: (user: AuthResponse) => void;
  logout: () => void;
}
const USER_KEY=import.meta.env.VITE_USER_KEY;
export const AuthConext = createContext<AuthContextType | null | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });
  const findUserById=async(id:number)=>{
    const infoUser:responseInfoUser= await userServices.findUserByid(id);
    return infoUser;
  }
  const login = async (userData: AuthResponse) => {
    const infoUser= await findUserById(userData.userId);
    localStorage.setItem(USER_KEY,JSON.stringify(infoUser.result));
    setUser(infoUser.result);
    navigate(RouterLink.Home);
  };
  const logout = () => {};
  return (
    <AuthConext.Provider value={{ user, login, logout }}>
      {children}
    </AuthConext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error('User này bị rỗng');
  return context;
};
