import styled from 'styled-components';

export const media = {
  md: '@media (max-width: 768px)',
  se: '@media (max-width: 320px)',
};

export const Nav = styled.nav`
  border-top: 1px solid #161616;
  border-bottom: 1px solid #161616;
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    padding: 0.5rem;
    span {
      font-size: 24px;
      transition: all 200ms ease-in;
    }
    span:hover {
      color: #be32be;
    }
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  transition: all 200ms ease-in;
  padding-right: 1.5rem;

  &:hover {
    color: #be32be;
  }
  display: none;
  ${media.md} {
    display: flex;
  }
`;

export const MenuStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1000ms ease-in;

  ${media.md} {
    width: 100%;
    flex-direction: column;
    z-index: 10000;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 57px;
    opacity: 0.8;
    background-color: #dcdcdc;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

  li {
    margin: 0 0.5rem;

    ${media.md} {
      margin: 0.5rem;
    }

    a {
      transition: all 200ms ease-in;
    }
    a:hover {
      color: #be32be;
    }
  }
`;
