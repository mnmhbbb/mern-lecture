import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <h1>{props.detail.title}</h1>
      <h2>{props.detail.price}원</h2>
      <h3>{props.detail.description}</h3>
    </div>
  );
};

export default ProductInfo;
