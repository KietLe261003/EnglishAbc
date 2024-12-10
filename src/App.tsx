import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import { homeRoute } from './Routes';
import LayoutAdmin from './Layout/AdminLayout/LayoutAdmin';
import { adminRoute } from './Routes/adminRoute';
import { useEffect } from 'react';
import PrivateRoute from './Common/Context/PrivateRoute';
import { useAuth } from './Common/Context/AuthContext';
import NotFoundAccess from './Page/AdminPage/HomePage/NotRoleAccess';

const App: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          {homeRoute.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element></route.element>}
              />
            );
          })}
        </Route>
        <Route path='admin' element={<PrivateRoute />}>
          <Route element={<LayoutAdmin />}>
            {adminRoute.map((route, index) => {
              if (route.role === 'admin' && user?.role?.roleId === 2) {
                // Chỉ render nếu người dùng có quyền truy cập
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.element />}
                  />
                );
              } else if (route.role === 'admin') {
                // Nếu không có quyền truy cập, không hiển thị gì hoặc render trang lỗi
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<NotFoundAccess/>}
                  />
                );
              }
              // Render các route không yêu cầu quyền admin
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
