import styled from 'styled-components';
import { Form } from 'antd';

export const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & Button {
    width: 300px;
  }
`;

export const FormStyle = styled(Form)`
  border: 2px solid black;
`;
