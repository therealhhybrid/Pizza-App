import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./productsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading> {heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo />
              <ProductTitle> {product.name}</ProductTitle>
              <ProductDesc> {product.desc}</ProductDesc>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton> {product.button}</ProductButton>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
