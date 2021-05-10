import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ebebeb;
  color: #161616;

  .children {
    max-width: 1200px;
    margin: 0 auto;
    /* border: 1px solid black; */
    padding: 6rem 0 4rem;
  }

  footer {
    background-color: #fff;
    height: 7rem;
    text-align: center;
    font-size: 16px;
    padding-top: 3rem;
  }
`;

const LayoutStyle = ({ children }) => {
  return (
    <Container>
      <section>
        <div className="children">{children}</div>
      </section>
      <footer>© MNMHBBB</footer>
    </Container>
  );
};

export default LayoutStyle;
