import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #ebebeb;
  color: #161616;

  /* @media (max-width: 820px) {
    max-width: 100%;
  } */
  .children {
    max-width: 1200px;
    margin: 0 auto;
    border: 1px solid black;
    padding: 7rem 0 4rem;
  }
`;

const LayoutStyle = ({ children }) => {
  return (
    <>
      <Container>
        <div className="children">{children}</div>
      </Container>
      <footer>© MNMHBBB, Co., hello</footer>
    </>
  );
};

export default LayoutStyle;
