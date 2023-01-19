import {
  CartItemContainer,
  ItemDetails,
  CartImage,
  Name,
} from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{`${name}`}</Name>
        <span>{`${quantity} X ${price}`}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
