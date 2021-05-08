import styled from 'styled-components';

export const UploadStyle = styled.div`
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 800;
  }

  .items {
    max-width: 100%;
    margin: 0 auto;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
      border: none;
      height: 30px;
    }

    textarea {
      width: 100%;
      margin-bottom: 0.5rem;
    }

    .cate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      label {
        margin-right: 1rem;
        font-weight: 800;
        font-size: 16px;
        margin-bottom: 0.5rem;
      }
      select {
        width: 200px;
        height: 30px;
        margin-bottom: 0.5rem;
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
