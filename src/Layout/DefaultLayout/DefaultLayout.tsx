import { Outlet } from "react-router-dom";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import Sidebar from "./Componets/Sidebar";

const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="min-w-64 fixed left-0 top-0 bottom-0 overflow-auto md:max-lg:w-[250px]">
        <Sidebar /> {/* Sidebar ở bên trái */}
      </div>
      <main className="ml-[350px] w-full">
        <Navbar/> {/* Navbar ở trên cùng */}
        <div className="p-[50px] mt-[50px] ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default DefaultLayout;
