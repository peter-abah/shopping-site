import { Link, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const NoItems = () => {
  return (
    <div>
      <p>No items in cart</p>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

const Cart = ({cart, clearCart}) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClick = () => {
    clearCart();
    navigate('/thank-you');
  }

  if (cart.length === 0) {
    return <NoItems />;
  } else {
    return (
      <div className="flex flex-col items-center py-8 px-[7.5vw] text-xl">
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <p className="mt-10">Total Price: {totalPrice}</p>

        <button
          className="mt-6 px-4 py-2 border border-solid"
          onClick={handleClick}
        >
          Buy Now
        </button>
      </div>
    );
  }
};

export default Cart;
