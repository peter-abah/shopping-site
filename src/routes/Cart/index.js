import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const NoItems = () => {
  return (
    <div>
      <p>No items in cart</p>
      <Link to="/shop">Shop</Link>
    </div>
  )
};
const Cart = (props) => {
  const { cart } = props;
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <NoItems />
  } else {
    return (
      <div className="flex flex-col items-center py-8 px-[7.5vw] text-xl">
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <p className="mt-10">Total Price: {totalPrice}</p>
        <Link className="mt-6 px-4 py-2 border border-solid" to="/thank-you">Buy Now</Link>
      </div>
    );
  }
};

export default Cart;
