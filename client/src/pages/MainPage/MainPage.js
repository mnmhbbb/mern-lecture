import React, { useEffect, useState } from 'react';
import LayoutStyle from '../../layout/LayoutStyle';
import axios from 'axios';
import { Col, Row } from 'antd';
import { MainStyle, ProductList } from './style';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // let body = {};

    axios.post('api/product/products').then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setProducts(response.data.productInfo);
      } else {
        alert('상품 목록을 가져오지 못 했습니다.');
      }
    });
  }, []);

  const renderList = products.map((prod, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <ProductList>
          <ImageSlider images={prod.images} />
          <div className="description">
            <strong>{prod.title}</strong>
            <p>{prod.price}원</p>
          </div>
        </ProductList>
      </Col>
    );
  });

  return (
    <LayoutStyle>
      <MainStyle>
        <h1>~상품 목록~</h1>
        <div>
          {/* 필터 */}
          {/* 검색 */}
          {/* 목록 */}
          <Row gutter={[16, 16]}>{renderList}</Row>
          <button>더보기</button>
        </div>
      </MainStyle>
    </LayoutStyle>
  );
};

export default MainPage;
