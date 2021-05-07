import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { registerUser } from '../../redux/user/userAPI';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  return (
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
          <div className="app">
            <h2>회원가입</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item required label="Name">
                <Input
                  id="name"
                  placeholder="이름"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                />
                {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}
              </Form.Item>

              <Form.Item
                required
                label="Email"
                hasFeedback
                validateStatus={errors.email && touched.email ? 'error' : 'success'}
              >
                <Input
                  id="email"
                  placeholder="이메일"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item
                required
                label="Password"
                hasFeedback
                validateStatus={errors.password && touched.password ? 'error' : 'success'}
              >
                <Input
                  id="password"
                  placeholder="비밀번호"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="비밀번호 확인"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  가입
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterPage;
