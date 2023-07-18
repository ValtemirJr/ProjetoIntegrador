import styled from 'styled-components';
import {
  blackColor,
  bodyFont,
  greyColor,
  whiteColor,
} from '../../UI/variables';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  background: ${greyColor};
  border: none;
  border-bottom: solid 1px ${blackColor};

  &:focus,
  &:hover {
    outline: none;
    border: solid 1px ${blackColor};
  }

  &::-webkit-input-placeholder {
    font-family: ${bodyFont};
    font-size: 14px;
    font-weight: 100;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1rem;
  margin: 0.5rem 0;
  background: ${greyColor};
  border: none;
  border-bottom: solid 1px ${blackColor};
  resize: none;

  &:focus,
  &:hover {
    outline: none;
    border: solid 1px ${blackColor};
  }

  &::-webkit-input-placeholder {
    font-family: ${bodyFont};
    font-size: 14px;
    font-weight: 100;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin: 1.5rem 0;
  background: ${blackColor};
  color: ${whiteColor};
  border: solid 1px ${blackColor};
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

export { ContactForm, Input, TextArea, SubmitButton };
