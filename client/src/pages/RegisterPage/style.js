import styled from 'styled-components';

export const FormStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .items {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    label {
      font-size: 18px;
      font-weight: 800;
    }

    div {
      font-size: 14px;
    }
  }

  input {
    width: 300px;
    height: 30px;
    font-size: 16px;
  }

  .input-feedback {
    color: red;
  }

  Button {
    width: 310px;
    height: 40px;
    font-size: 18px;
  }
`;
