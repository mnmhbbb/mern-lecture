import React from 'react';
import { Carousel } from 'antd';
import { ProductImg } from './style';
import { BACKURL } from '../url';

const ProductImage = (props) => {
  return (
    <ProductImg>
      <Carousel className="crs">
        {props.detail &&
          props.detail.map((img, index) => (
            <div key={index} className="crsImg">
              <img src={`${BACKURL}/${img}`} alt={img} />
            </div>
          ))}
      </Carousel>
    </ProductImg>
  );
};

export default ProductImage;
