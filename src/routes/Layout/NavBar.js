import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import BagIcon from "@mui/icons-material/ShoppingBag";

import NavLinks from './NavLinks';

const NavBar = (props) => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  const quantity = props.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between py-4 px-[7.5vw]">
      <button>
        <MenuIcon onClick={handleClick} className="text-3xl" />
      </button>
      <h1 className="text-2xl">
        <Link to="/">Blvck</Link>
      </h1>

      <NavLinks
        isHidden={isHidden}
        quantity={quantity}
        handleClick={handleClick}
      />
      <Link to="/cart">
        <BagIcon className="text-3xl" /> {quantity}
      </Link>
    </nav>
  );
};

export default NavBar;
