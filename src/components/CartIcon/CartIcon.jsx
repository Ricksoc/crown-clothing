import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";

const CartIcon = () => {
  const { cartCount, setCartDropdown } = useContext(CartContext);

  const toggleCartDropdown = () =>
    setCartDropdown((prevCartDropdown) => !prevCartDropdown);

  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
