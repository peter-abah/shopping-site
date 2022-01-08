import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cart } = props;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <p>Total Price: {totalPrice}</p>
      <Link to="/thank-you">Buy Now</Link>
    </div>
  );
};

export default Cart;
