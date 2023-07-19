import styled from 'styled-components';
import {
  primaryColor,
  whiteColor,
  whiteGreyColor,
} from '../../../../components/UI/variables';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 300;
    margin: 2rem;
    align-self: flex-start;

    svg {
      position: relative;
      margin-right: 1rem;
      top: 0.4rem;
    }
  }

  .button__crud {
    background-color: ${whiteColor};
    color: ${primaryColor};
    border: solid 1px ${primaryColor};
    margin: 1rem 0 2rem;

    &:hover {
      background-color: ${primaryColor};
      color: ${whiteColor};
    }

    &:focus {
      outline: none;
    }
  }

  .button__cancel {
    background-color: ${whiteColor};
    color: red;
    border: solid 1px red;
    margin: 1rem 1rem 2rem;

    &:hover {
      background-color: red;
      color: ${whiteColor};
    }

    &:focus {
      outline: none;
    }
  }

  .actions {
    display: flex;
    align-items: baseline;
    align-self: flex-end;
    margin: 0 5rem 0 0;

    input {
      padding: 0.5rem;
      border: 1px solid ${whiteGreyColor};
      margin: 0 0.5rem;
      border-radius: 5px;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
        color: ${primaryColor};
        border: 1px solid ${primaryColor};

        &::placeholder {
          color: ${primaryColor};
        }
      }
    }
  }

  .date-filter-label {
    font-size: 1rem;
    font-weight: 300;
  }

  .date-filter {
    padding: 0.5rem;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 300;
    margin: 0 5rem 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      color: transparent;
      margin: 30px;
    }

    .actions {
      align-self: flex-start;
      flex-direction: row-reverse;
      margin: 0 0 0 1rem;
    }

    .date-filter {
      margin: 0 0 1rem 0;
    }

    .date-filter-label {
      display: none;
    }
  }
`;

export default Section;
