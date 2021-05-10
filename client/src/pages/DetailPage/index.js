import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutStyle from '../../layout';

const DetailPage = (props) => {
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`api/product/products_by_id?id=${productId}&type=single`).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setProduct(response.data.product[0]);
      } else {
        console.log('err');
        alert('상품 정보를 가져오지 못했습니다.');
      }
    });
  }, [productId]);

  return (
    <LayoutStyle>
      <section>
        <h1>{Product.title}</h1>
      </section>
    </LayoutStyle>
  );
};

export default DetailPage;
