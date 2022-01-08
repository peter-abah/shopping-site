import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const quantity = props.cart.reduce((total, item) => total + item.quantity, 0)
  return (
    <nav className="nav-bar">
      <h1 className="nav-bar__brand">Blvck</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart {quantity}</Link></li>
      </ul>
    </nav>
  )
};

export default NavBar;
