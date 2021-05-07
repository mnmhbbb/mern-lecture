import styled from 'styled-components';

export const media = {
  md: '@media (max-width: 768px)',
};

export const Nav = styled.nav`
  background-color: #1e90ff;
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
      color: #fff;
    }
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;
  transition: all 200ms ease-in;

  &:hover {
    color: #fff;
  }
  padding: 0.5rem;
  display: none;
  ${media.md} {
    display: flex;
  }
`;

export const MenuStyle = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1000ms ease-in;

  ${media.md} {
    width: 100%;
    flex-direction: column;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 57px;
    opacity: 0.8;
    background-color: #e5e5e5;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }

  li {
    padding: 0 0.5rem;

    ${media.md} {
      padding: 0.5rem;
    }

    a {
      transition: all 200ms ease-in;
    }
    a:hover {
      color: #fff;
    }
  }
`;
