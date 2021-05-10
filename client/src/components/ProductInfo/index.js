import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Info = styled.div`
  padding: 3rem;
  width: 100%;
  background-color: #fff;
  margin-top: 2rem;

  strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 26px;
    padding-bottom: 1rem;
    border-bottom: 1px solid #161616;
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
  }

  p {
    white-space: pre-line;
    font-size: 20px;
  }
`;

const ProductInfo = (props) => {
  const price = props.detail.price;
  const [commaPrice, setCommaPrice] = useState(0);

  useEffect(() => {
    if (price) {
      setCommaPrice(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, [price]);

  return (
    <Info>
      <h2>{props.detail.title}</h2>
      <strong>{commaPrice}원</strong>
      <p>{props.detail.description}</p>
    </Info>
  );
};

export default ProductInfo;
