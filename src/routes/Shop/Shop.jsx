import { Fragment, useContext } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/Categories";

import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
