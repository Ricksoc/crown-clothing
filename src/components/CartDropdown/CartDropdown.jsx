import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import Button from "../Button/Button";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navToCheckout = () => navigate("/checkout");

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
      <Button inputProps={{ onClick: navToCheckout }}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
