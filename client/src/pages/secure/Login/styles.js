import styled from 'styled-components';
import {
  bodyFont,
  primaryColor,
  secondaryColor,
  whiteColor,
  whiteGreyColor,
} from '../../../components/UI/variables';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${whiteGreyColor};

  h1 {
    margin-bottom: 20px;
    font-family: ${bodyFont};
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 410px;
  background-color: ${whiteColor};
  border-radius: 15px;
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;

  .input-group {
    display: flex;
    align-items: center;
  }

  .input-group svg {
    margin-bottom: 15px;
    color: ${primaryColor};
    font-size: 20px;
  }

  input {
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid ${primaryColor};

    &:focus {
      outline: none;
      border: 1px solid ${primaryColor};
    }

    &:hover {
      border: 1px solid ${primaryColor};
    }
  }

  button {
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    width: 220px;
    margin-top: 2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${secondaryColor};
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;

export { LoginContainer, LoginForm };
