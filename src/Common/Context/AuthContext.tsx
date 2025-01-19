import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterLink } from '../../Util/RouterLink';
import { AuthResponse, responseInfoUser, User } from '../../Type/User/User';
import { userServices } from '../../Services/UserService';

interface AuthContextType {
  user: User | null | undefined;
  login: (user: AuthResponse) => void;
  logout: () => void;
  token: string | null | undefined;
}

const USER_KEY = import.meta.env.VITE_USER_KEY;
const USER_TOKEN = import.meta.env.VITE_USER_TOKEN;

export const AuthConext = createContext<AuthContextType | null | undefined>(
  undefined,
);

const isTokenExpired = (token: string): boolean => {
  try {
    const [, payload] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload)); // Giải mã
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedPayload.exp < currentTime;
  } catch (error) {
    console.error('Token không hợp lệ:', error);
    return true;
  }
};

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });

  const [token, setToken] = useState<string | null | undefined>(() => {
    const storedToken = localStorage.getItem(USER_TOKEN);
    if (storedToken && isTokenExpired(storedToken)) {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(USER_TOKEN);
      return undefined;
    }
    return storedToken;
  });

  // Tự động kiểm tra token
  useEffect(() => {
    const interval = setInterval(() => {
      if (token && isTokenExpired(token)) {
        console.warn('Token đã hết hạn. Đăng xuất...');
        alert('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
        logout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [token]);

  const findUserById = async (token: string) => {
    const infoUser: responseInfoUser = await userServices.findUserByid(token);
    return infoUser;
  };

  const login = async (userData: AuthResponse) => {
    if (isTokenExpired(userData.token)) {
      throw new Error('Token đã hết hạn');
    }
    const infoUser = await findUserById(userData.token);
    localStorage.setItem(USER_KEY, JSON.stringify(infoUser.result));
    localStorage.setItem(USER_TOKEN, userData.token);
    setUser(infoUser.result);
    setToken(userData.token);
    navigate(RouterLink.Home);
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_TOKEN);
    setUser(null);
    setToken(null);
    navigate(RouterLink.Home);
  };

  return (
    <AuthConext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthConext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error('Người dùng không tồn tại trong context.');

  if (context.token && isTokenExpired(context.token)) {
    context.logout();
    alert('Token đã hết hạn. Vui lòng đăng nhập lại.');
    throw new Error('Token đã hết hạn.');
  }

  return context;
};
