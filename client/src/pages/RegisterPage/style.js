import styled from 'styled-components';

export const FormStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  fieldset {
    width: 300px;
    margin: 0 auto;
    border: none;
  }

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
    max-width: 300px;
    height: 30px;
    font-size: 16px;
  }

  button {
    display: block;
    width: 300px;
    margin: 0 auto;
    height: 45px;
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    border: 1px solid black;
    background-color: black;
    color: white;
  }

  button:hover {
    background-color: white;
    color: black;
  }

  .signupTerms {
    border: 1px solid black;
    width: 300px;
    padding: 0.5rem;
    margin-bottom: 1rem;

    .checkbox {
      display: flex;
      align-items: center;
      height: 30px;

      input {
        zoom: 1.5;
        margin: 0 0.5rem;
        cursor: pointer;
      }

      a {
        color: black;
        margin-left: 2rem;
      }
    }
  }
`;

export const Feedback = styled.div`
  color: red;
`;
