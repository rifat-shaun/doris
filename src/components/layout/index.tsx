import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Breadcrumbs from "./Breadcrumbs";

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default Layout;