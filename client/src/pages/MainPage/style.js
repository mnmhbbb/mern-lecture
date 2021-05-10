import styled from 'styled-components';

export const MainStyle = styled.div`
  width: 100%;

  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 150px;
      height: 56px;
      margin-top: 4rem;
      line-height: 17px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 32px;
      border: none;
      color: #fff;
      background-color: #a164a1;
      transition: all 400ms ease-in;
    }

    button:hover {
      background-color: #fff;
      color: #a164a1;
    }
  }

  .selectGroup {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
    margin-bottom: 2rem;

    .search {
      margin: 4px;
    }
  }
`;

export const ProductList = styled.div`
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .description {
    width: 100%;
    font-size: 20px;
    text-align: center;
    background: #fff;
    padding: 0.5rem;
    color: #161616;
    p {
      margin: 0;
    }
  }

  img {
    display: block;
    width: 250px;
    height: 200px;
  }
`;
