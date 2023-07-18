import styled from 'styled-components';
import {
  bodyFont,
  primaryColor,
  subtitleFont,
  titleFont,
} from '../UI/variables';

const ProfessionalStyled = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 10rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    margin: 2rem;
  }

  img {
    border-radius: 50%;
    margin-bottom: 7rem;
    max-width: 275px;
    max-height: 275px;
  }

  h3 {
    text-align: left;
    line-height: 1.41em;
    font-size: 26px;
    font-family: ${titleFont};
    font-weight: 300;
    color: ${primaryColor};
  }

  p:first-of-type {
    text-align: left;
    line-height: 1.75em;
    font-size: 18px;
    font-family: ${subtitleFont};
  }

  p:last-of-type {
    text-align: justify;
    line-height: 1.875em;
    font-size: 15px;
    font-family: ${bodyFont};
    font-weight: 300;
  }

  @media screen and (max-width: 1260px) {
    padding: 0 5rem;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    img {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export default ProfessionalStyled;
