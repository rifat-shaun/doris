import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      Hello From layout
      <Outlet />
    </div>
  );
};

export default Layout;
