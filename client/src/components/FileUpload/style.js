import styled from 'styled-components';
import { media } from '../NavBar/style';

export const UploadStyle = styled.div`
  width: 600px;
  height: 300px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${media.md} {
    width: 100%;
    height: 200px;
  }

  .files {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
    margin-right: 1rem;
    border-radius: 4px;

    ${media.md} {
      width: 80px;
      height: 80px;
    }

    ${media.se} {
      width: 70px;
      height: 70px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    span {
      cursor: pointer;
      font-size: 30px;
      padding: 12px;
    }
  }
`;

export const Img = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  background-color: #ebebeb;
  width: 400px;
  height: 300px;

  ${media.md} {
    width: 250px;
    height: 200px;
  }

  ${media.se} {
      width: 200px;
      height:150px;
    }
  img {
    width: 300px;
    height: 300px;
    margin-right: 0.5rem;
    cursor: pointer;

    ${media.md} {
      width: 250px;
      height: 200px;
    }
    
    ${media.se} {
      width: 160px;
      height: 160px;
    }
`;
