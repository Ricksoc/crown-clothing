import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import CartItem from "../CartItem/CartItem";

import Button from "../Button/Button";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">CART IS EMPTY</span>
      )}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
