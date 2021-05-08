import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/userAPI';
import LayoutStyle from '../../layout/LayoutStyle';
import { FormStyle } from './style';

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  return (
    <LayoutStyle>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('이름을 입력하세요.'),
          email: Yup.string().email('Email is invalid').required('이메일을 입력하세요.'),
          password: Yup.string()
            .min(6, '비밀번호는 6자리 이상을 입력하세요.')
            .required('비밀번호를 입력하세요.'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호를 입력하세요.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let dataToSubmit = {
              email: values.email,
              password: values.password,
              name: values.name,
            };

            dispatch(registerUser(dataToSubmit)).then((response) => {
              if (response.payload.success) {
                props.history.push('/login');
              } else {
                alert(response.payload.err.errmsg);
              }
            });
            setSubmitting(false);
          }, 500);
        }}
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
          } = props;
          return (
            <FormStyle>
              <h2>회원가입</h2>
              <form onSubmit={handleSubmit}>
                <div className="items">
                  <label>이름</label>
                  <input
                    id="name"
                    placeholder="이름"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <div className="input-feedback">{errors.name}</div>
                  )}
                </div>

                <div
                  className="items"
                  validatestatus={errors.email && touched.email ? 'error' : 'success'}
                >
                  <label>이메일</label>
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

                <div
                  className="items"
                  validatestatus={errors.password && touched.password ? 'error' : 'success'}
                >
                  <label>비밀번호</label>
                  <input
                    id="password"
                    placeholder="비밀번호"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}
                </div>

                <div className="items">
                  <label>비밀번호 확인</label>
                  <input
                    id="confirmPassword"
                    placeholder="비밀번호 확인"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">{errors.confirmPassword}</div>
                  )}
                </div>

                <button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  가입
                </button>
              </form>
            </FormStyle>
          );
        }}
      </Formik>
    </LayoutStyle>
  );
};

export default RegisterPage;
