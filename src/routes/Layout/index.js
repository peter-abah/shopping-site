import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = (props) => {
  return (
    <main className="min-h-screen text-primary bg-secondary">
      <NavBar {...props} />
      <Outlet />
    </main>
  );
};

export default Layout;
