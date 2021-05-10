import { Carousel } from 'antd';
import React from 'react';
import { ProductImg } from './style';

const ProductImage = (props) => {
  return (
    <ProductImg style={{ border: '2px solid black' }}>
      <Carousel className="crs">
        {props.detail &&
          props.detail.map((img, index) => (
            <div key={index} className="crsImg">
              <img src={`http://localhost:3000/${img}`} alt={img} />
            </div>
          ))}
      </Carousel>
    </ProductImg>
  );
};

export default ProductImage;
