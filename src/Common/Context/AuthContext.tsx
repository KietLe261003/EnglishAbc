import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { RouterLink } from '../../Util/RouterLink';
import { AuthResponse, responseInfoUser, User } from '../../Type/User/User';
import { userServices } from '../../Services/UserService';
interface AuthContextType {
  user: User | null | undefined;
  login: (user: AuthResponse) => void;
  logout: () => void;
  token: string | null | undefined
}
const USER_KEY=import.meta.env.VITE_USER_KEY;
const USER_TOKEN=import.meta.env.VITE_USER_TOKEN;
export const AuthConext = createContext<AuthContextType | null | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });
  const [token,setToken]=useState<string | null | undefined>(()=>{
    const storeToken = localStorage.getItem(USER_TOKEN);
    return storeToken ? storeToken : undefined;
  })
  const findUserById=async(token:string)=>{
    const infoUser:responseInfoUser= await userServices.findUserByid(token);
    return infoUser;
  }
  const login = async (userData: AuthResponse) => {
    const infoUser= await findUserById(userData.token);
    localStorage.setItem(USER_KEY,JSON.stringify(infoUser.result));
    localStorage.setItem(USER_TOKEN,userData.token);
    setUser(infoUser.result);
    setToken(userData.token);
    navigate(RouterLink.Home);
  };
  const logout = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_TOKEN);
    setUser(null);
    return <Navigate to={RouterLink.Home}/>
  };
  return (
    <AuthConext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthConext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error('User này bị rỗng');
  return context;
};
