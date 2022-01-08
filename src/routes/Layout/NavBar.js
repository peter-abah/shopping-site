import { useState } from "react";
import { Link } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import BagIcon from "@mui/icons-material/ShoppingBag";

const NavLinks = ({ isHidden, handleClick }) => {
  const links = [
    { name: "Home", path: "/", id: 0 },
    { name: "Shop", path: "/shop", id: 1 },
  ];
  const hiddenClass = isHidden ? "hidden" : "";
  return (
    <div
      className={`${hiddenClass} px-[7.5vw] py-4 fixed w-screen h-screen bg-secondary top-0 left-0`}
    >
      <button className="block mr-auto" onClick={handleClick}>
        <CloseIcon className="text-primary text-3xl" />
      </button>

      <ul className="flex flex-col justify-center items-center h-full">
        {links.map(({ name, path, id }) => (
          <li className="py-4 text-2xl" key={id}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBar = (props) => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!isHidden);
  };

  const quantity = props.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="flex justify-between py-4 px-[10vw]">
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
