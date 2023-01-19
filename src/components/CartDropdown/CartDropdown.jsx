import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { useNavigate } from "react-router-dom";

import CartItem from "../CartItem/CartItem";

import Button from "../Button/Button";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const navToCheckout = () => navigate("/checkout");

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>CART IS EMPTY</EmptyMessage>
        )}
      </CartItems>
      <Button inputProps={{ onClick: navToCheckout }}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
