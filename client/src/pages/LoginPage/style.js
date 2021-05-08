import styled from 'styled-components';

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
`;

export const FormStyle = styled.div`
  min-width: 300px;
  margin: 2rem auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .items {
    width: 100%;
    margin-bottom: 1rem;

    input {
      width: 300px;
      height: 30px;
      font-size: 16px;
    }

    .input-feedback {
      color: red;
    }

    button {
      width: 310px;
      margin: 0 auto;
      height: 40px;
      font-size: 18px;
    }
  }

  a {
    color: black;
  }

  .items-rememberME {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;

    input {
      zoom: 1.5;
    }
  }

  .items-register {
    text-align: center;
  }
`;
