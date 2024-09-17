import { Outlet } from "react-router-dom";
import Banner from "./Banner";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Outlet />
    </div>
  );
};

export default Layout;
