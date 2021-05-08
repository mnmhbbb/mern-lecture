import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: skyblue;

  .children {
    padding: 5rem 0;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const LayoutStyle = ({ children }) => {
  return (
    <>
      <Container>
        <div className="children">{children}</div>
      </Container>
    </>
  );
};

export default LayoutStyle;