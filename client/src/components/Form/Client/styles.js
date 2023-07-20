import styled from 'styled-components';
import { blackColor, primaryColor } from '../../UI/variables';

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 1rem;

  .input__group {
    display: flex;
    flex-direction: column;
  }

  .textarea__group {
    display: flex;
    flex-direction: column;
  }

  .button__group {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 2rem 2rem 0 2rem;
  }

  label {
    font-weight: 300;
    align-self: flex-start;
  }

  input {
    padding: 0.5rem;
    margin: 2rem;
    border: none;
    border-bottom: 1px solid ${blackColor};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      border-bottom: 1px solid ${primaryColor};
      color: ${primaryColor};
    }
  }

  textarea {
    padding: 1rem 1rem 5rem 1rem;
    margin: 2rem;
    border: none;
    border: 1px solid ${blackColor};
    transition: all 0.3s ease-in-out;
    resize: none;

    &:focus {
      outline: none;
    }

    &:hover {
      border: 1px solid ${primaryColor};
      color: ${primaryColor};
    }
  }

  select {
    padding: 0.5rem;
    margin: 2rem;
    border: none;
    border-bottom: 1px solid ${blackColor};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 480px) {
    input {
      margin: 1rem;
    }
  }
`;

export default FormStyled;
