import styled from 'styled-components';

export const UploadStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  .items {
    max-width: 100%;
    margin: 0 auto;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
      border: none;
      height: 35px;
      padding: 0.5rem;
    }

    textarea {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      border: none;
    }

    textarea:focus {
      outline: none;
    }

    .cate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      label {
        margin-right: 1rem;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 0.5rem;
      }
      select {
        width: 200px;
        height: 30px;
        margin-bottom: 0.5rem;
        border: none;
        cursor: pointer;
      }
      select:focus {
        outline: none;
      }
    }

    .btn {
      width: 100%;
      margin: 2rem auto;
      button {
        width: 100%;
        height: 40px;
        font-size: 16px;
        background-color: black;
        color: white;
        border: 1px solid black;
        cursor: pointer;
      }

      button:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;
