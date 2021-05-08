import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Hamburger, MenuStyle, Nav } from './style';
import { logoutUser } from '../../redux/user/userAPI';
import { selectUser } from '../../redux/user/userSlice';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const history = useHistory();
  const showSidebar = useCallback(() => {
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
        <Hamburger onClick={showSidebar}>
          <MenuOutlined />
        </Hamburger>
        <MenuStyle isOpen={isOpen} onClick={showSidebar}>
          <li>
            <Link to="/">메뉴1</Link>
          </li>
          {userData && userData.isAuth ? (
            <li onClick={logOutBtn}>
              <Link to="/">로그아웃</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </>
          )}
        </MenuStyle>
      </Nav>
    </>
  );
};

export default NavBar;
