import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";

import { useContext } from "react";

import { CartContext } from "../../contexts/Cart";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const clickHandler = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        inputProps={{ onClick: clickHandler }}
      >
        ADD TO CART
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
