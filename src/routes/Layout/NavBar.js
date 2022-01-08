import { useState } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const NavLinks = ({ quantity }) => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  const links = [
    { name: 'Home', path: '/home', id: 1 },
    { name: 'Shop', path: '/shop', id: 0 },
    { name: `Cart ${quantity}`, path: '/cart', id: 2 },
  ];

  return (
    <div>
      <button onClick={handleClick}>
        {isHidden ? <MenuIcon className="text-[2rem]" /> : <CloseIcon className="text-[2rem]" />}
      </button>

      <ul>
        {links.map(({ name, path, id }) => (
          <li key={id}>
            <Link to={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBar = (props) => {
  const quantity = props.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between">
      <h1 className="nav-bar__brand">Blvck</h1>
      <NavLinks quantity={quantity} />
    </nav>
  );
};

export default NavBar;
