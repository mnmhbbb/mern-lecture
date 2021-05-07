import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Hamburger, MenuStyle, Nav } from './style';
import { logoutUser } from '../../redux/user/userAPI';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const logOutBtn = useCallback(() => {
    dispatch(logoutUser());
    history.push('/');
  }, [dispatch, history]);

  return (
    <>
      <Nav>
        <Link to="/">
          <HomeOutlined />
        </Link>
        <Hamburger onClick={onToggle}>
          <MenuOutlined />
        </Hamburger>
        <MenuStyle isOpen={isOpen}>
          <li>
            <Link to="/">메뉴1</Link>
          </li>
          <li>
            <Link to="/register">회원가입</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li onClick={logOutBtn}>
            <Link to="/">로그아웃</Link>
          </li>
        </MenuStyle>
      </Nav>
    </>
  );
};

export default NavBar;
