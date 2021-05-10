import styled from 'styled-components';

export const FormStyle = styled.div`
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

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
      margin-bottom: 0.5rem;
    }

    div {
      font-size: 14px;
    }
  }

  input {
    max-width: 300px;
    height: 35px;
    font-size: 16px;
    border: none;
    padding: 0.5rem;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 300px;
    margin: 1rem auto;
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
