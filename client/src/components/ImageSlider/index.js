import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const ImageSlide = styled.div`
  width: 100%;
`;

const ImageSlider = (props) => {
  return (
    <ImageSlide>
      <Carousel autoplay>
        {props.images.map((img, index) => (
          <div key={index}>
            <img src={`https://mern-usedshop.herokuapp.com/${img}`} alt={img} />
          </div>
        ))}
      </Carousel>
    </ImageSlide>
  );
};

export default ImageSlider;
