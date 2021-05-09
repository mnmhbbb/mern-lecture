import styled from 'styled-components';

export const MainStyle = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    font-weight: 800;
  }

  button {
    width: 100%;
    font-weight: 800;
    margin: 2rem auto;
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
    background: #e5e5e5;
    padding: 0.5rem;
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
