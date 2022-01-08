import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

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
        <CloseIcon className="text-primary !text-4xl" />
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

export default NavLinks;