import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { homeRoute } from "./Routes";
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin";
import { adminRoute } from "./Routes/adminRoute";
import { useEffect } from "react";
import PrivateRoute from "./Common/Context/PrivateRoute";

const App: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
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
        <Route path="admin" element={<PrivateRoute />}>
          <Route element={<LayoutAdmin />}>
            {adminRoute.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
