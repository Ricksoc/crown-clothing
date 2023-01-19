import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./CategoryPreview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={title}>{title.toUpperCase()}</Link>
      </Title>
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
