import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  ArrowButton,
  Value,
  Price,
  RemoveButton,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <ArrowButton onClick={removeItemHandler}>&#10094;</ArrowButton>
        <Value>{quantity}</Value>
        <ArrowButton onClick={addItemHandler}>&#10095;</ArrowButton>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
