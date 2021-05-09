import styled from 'styled-components';

export const MainStyle = styled.div`
  h1 {
    text-align: center;
    font-weight: 800;
  }
`;

export const ProductList = styled.div`
  margin: 1rem auto;

  .items {
    width: 250px;
    margin: 0;
    padding: 0;
    background: #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .description {
      font-size: 20px;
      text-align: center;
      padding: 0.5rem;
      p {
        margin: 0;
      }
    }
  }

  img {
    display: block;
    width: 100%;
    height: 200px;
  }
`;
