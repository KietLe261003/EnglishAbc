import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterLink } from '../../Util/RouterLink';
import { AuthResponse } from '../../Type/User/User';
interface AuthContextType {
  user: AuthResponse | null | undefined;
  login: (user: AuthResponse) => void;
  logout: () => void;
}
const USER_KEY=import.meta.env.VITE_USER_KEY;
export const AuthConext = createContext<AuthContextType | null | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthResponse | null>(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });
  const login = (userData: AuthResponse) => {
    localStorage.setItem(USER_KEY,JSON.stringify(userData));
    setUser(userData);
    alert('Đăng nhập thành công');
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
