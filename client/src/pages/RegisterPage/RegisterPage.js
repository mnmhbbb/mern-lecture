import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/user/userAPI';
import LayoutStyle from '../../layout/LayoutStyle';
import { Feedback, FormStyle } from './style';

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
          termAll: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('이름을 입력하세요.'),
          email: Yup.string().email('잘못된 이메일입니다.').required('이메일을 입력하세요.'),
          password: Yup.string()
            .min(6, '비밀번호는 6자리 이상을 입력하세요.')
            .required('비밀번호를 입력하세요.'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호를 입력하세요.'),
          termAll: Yup.boolean()
            .oneOf([true], '약관에 동의해주세요.')
            .required('약관에 동의해주세요.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            let dataToSubmit = {
              email: values.email,
              password: values.password,
              name: values.name,
              termAll: values.termAll,
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
                <fieldset>
                  <div className="items">
                    <label>이름</label>
                    <input
                      id="name"
                      placeholder="이름"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name && <Feedback>{errors.name}</Feedback>}
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
                    {errors.email && touched.email && <Feedback>{errors.email}</Feedback>}
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
                    {errors.password && touched.password && <Feedback>{errors.password}</Feedback>}
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
                      <Feedback>{errors.confirmPassword}</Feedback>
                    )}
                  </div>
                </fieldset>

                <fieldset className="signupTerms">
                  <div className="checkbox">
                    <input
                      id="termAll"
                      type="checkbox"
                      value={values.termAll}
                      onChange={handleChange}
                    />
                    <label htmlFor="termAll">모두 동의합니다.</label>
                  </div>
                  {/* <div className="checkbox">
                    <input id="age" type="checkbox" />
                    <label htmlFor="age">만 14세 이상 가입 동의 (필수)</label>
                  </div>
                  <div className="checkbox">
                    <input id="terms" type="checkbox" />
                    <label htmlFor="terms">이용약관 동의 (필수)</label>
                    <a href="/">약관 보기</a>
                  </div>
                  <div className="checkbox">
                    <input id="subscribe" type="checkbox" />
                    <label htmlFor="subscribe">이벤트 정보 수신 (선택)</label>
                  </div> */}
                  {errors.termAll && touched.termAll && <Feedback>{errors.termAll}</Feedback>}
                </fieldset>

                <button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  가입하기
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
