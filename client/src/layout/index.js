import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: skyblue;

  .children {
    border: 1px solid black;
    padding: 7rem 0 4rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const LayoutStyle = ({ children }) => {
  return (
    <>
      <Container>
        <div className="children">{children}</div>
        <footer>© MNMHBBB, Co., hello</footer>
      </Container>
    </>
  );
};

export default LayoutStyle;
