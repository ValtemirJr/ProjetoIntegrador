import styled from 'styled-components';
import { blackColor, primaryColor } from '../../UI/variables';

const FormStyled = styled.form`
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;

  .input__group {
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
    width: 80%;
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

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    input {
      margin: 1rem;
    }
  }
`;

export default FormStyled;
