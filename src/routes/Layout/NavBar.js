import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <nav>
      <h1>Tesiv</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart {props.itemNo}</Link></li>
      </ul>
    </nav>
  )
};

export default NavBar;
