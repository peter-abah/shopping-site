import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <main className="min-h-screen">
      <NavBar {...props} />
      <Outlet />
    </main>
  );
};

export default Layout;
