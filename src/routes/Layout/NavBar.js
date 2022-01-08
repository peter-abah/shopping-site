import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import BagIcon from "@mui/icons-material/ShoppingBag";

import NavLinks from "./NavLinks";

const NavBar = (props) => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  const quantity = props.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex py-4 px-[7.5vw] items-center">
      <div className="flex">
        <button className="mr-4 md:hidden">
          <MenuIcon onClick={handleClick} className="!text-4xl" />
        </button>
        <h1 className="text-2xl">
          <Link to="/">Blvck</Link>
        </h1>
      </div>

      <div className="flex items-center ml-auto">
        <NavLinks
          isHidden={isHidden}
          quantity={quantity}
          handleClick={handleClick}
        />
        <Link className="hover:scale-95 transition-transform" to="/cart">
          <BagIcon className="!text-4xl" /> {quantity}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
