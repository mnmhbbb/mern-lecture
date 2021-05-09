import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const ImageSlide = styled.div`
  width: 100%;
`;

const ImageSlider = (props) => {
  return (
    <ImageSlide>
      <Carousel>
        {props.images.map((img, index) => (
          <div key={index}>
            <img src={`http://localhost:5000/${img}`} alt={img} />
          </div>
        ))}
      </Carousel>
    </ImageSlide>
  );
};

export default ImageSlider;