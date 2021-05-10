import styled from 'styled-components';

export const ProductImg = styled.div`
  margin: 1rem;
  width: 100%;
  .crs {
    border: 1px solid red;
  }

  .crsImg {
    img {
      width: 100%;
      height: 400px;
    }
  }

  .ant-carousel .slick-dots li:not(.slick-active) {
    width: 24px;
  }

  .ant-carousel .slick-dots li button {
    border-radius: 50%;
    color: #646464;
    width: 15px;
    height: 15px;
  }
`;
