import React, { useCallback, useState } from 'react';
import LayoutStyle from '../../layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/user/userAPI';
import { FormStyle } from './style';

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem('rememberMe') ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(rememberMeChecked);

  const onLogin = useCallback(
    (values, { setSubmitting }) => {
      setTimeout(() => {
        let dataToSubmit = {
          email: values.email,
          password: values.password,
        };

        dispatch(loginUser(dataToSubmit))
          .then((response) => {
            if (response.payload.loginSuccess) {
              window.localStorage.setItem('userId', response.payload.userId);
              if (rememberMe === true) {
                window.localStorage.setItem('rememberMe', values.email);
              } else {
                localStorage.removeItem('rememberMe');
              }
              props.history.push('/');
            } else {
              setFormErrorMessage('이메일 또는 비밀번호를 다시 입력하세요.');
            }
          })
          .catch((err) => {
            setFormErrorMessage('이메일 또는 비밀번호를 다시 입력하세요.');
            setTimeout(() => {
              setFormErrorMessage('');
            }, 3000);
          });
        setSubmitting(false);
      }, 500);
    },
    [dispatch, props.history, rememberMe],
  );

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const initialEmail = localStorage.getItem('rememberMe') ? localStorage.getItem('rememberMe') : '';

  return (
    <LayoutStyle>
      <Formik
        initialValues={{
          email: initialEmail,
          password: '',
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('올바른 이메일이 아닙니다.').required('이메일을 입력하세요.'),
          password: Yup.string()
            .min(6, '비밀번호는 6자리 이상을 입력하세요.')
            .required('비밀번호를 입력하세요.'),
        })}
        onSubmit={onLogin}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            // handleReset,
          } = props;
          return (
            <FormStyle>
              <h2>로그인</h2>
              <form onSubmit={handleSubmit}>
                <div className="items">
                  <input
                    id="email"
                    placeholder="이메일"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="items">
                  <input
                    id="password"
                    // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="비밀번호"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </div>
                {formErrorMessage && (
                  <label>
                    <p
                      style={{
                        color: '#ff0000bf',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                      }}
                    >
                      {formErrorMessage}
                    </p>
                  </label>
                )}
                <div className="items-rememberME">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    onChange={handleRememberMe}
                    checked={rememberMe}
                  />
                  <label htmlFor="rememberMe">아이디 저장</label>
                  {/* <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                    비밀번호 찾기
                  </a> */}
                </div>
                <div className="items">
                  <button disabled={isSubmitting} onSubmit={handleSubmit} type="submit">
                    로그인
                  </button>
                </div>
                <div className="items-register">
                  아직 회원이 아니신가요? <a href="/register">회원가입</a>
                </div>
              </form>
            </FormStyle>
          );
        }}
      </Formik>
    </LayoutStyle>
  );
};

export default LoginPage;
