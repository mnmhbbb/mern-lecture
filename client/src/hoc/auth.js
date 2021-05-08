import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../redux/user/userAPI';

export const Auth = (ComposedClass, reload, adminRoute = null) => {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        if (!response.payload.isAuth) {
          if (reload) {
            props.history.push('/login');
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (reload === false) {
              props.history.push('/');
            }
          }
        }
      });
    }, [dispatch, props.history]);

    return <ComposedClass {...props} user={user} />;
  }
  return AuthenticationCheck;
};
