import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <main>
      <NavBar {...props} />
      <Outlet />
    </main>
  )
};

export default Layout;
