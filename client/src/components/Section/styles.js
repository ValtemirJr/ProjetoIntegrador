import styled from 'styled-components';
import {
  textColor,
  titleFont,
  subitleFont,
  blackColor,
  bodyFont,
  whiteColor,
} from '../UI/variables';

const SectionStyled = styled.header`
  background-color: ${whiteColor};
  color: ${textColor};
  padding: 7.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .section-container {
    width: 100%;
    padding: 5rem;
    display: flex;
    flex-direction: column;
  }

  .section-title__home {
    font-family: ${titleFont};
    font-size: 40px;
    font-weight: 200;
    line-height: 1.35em;
    margin-bottom: 3rem;
    text-transform: uppercase;
    text-align: left;
    color: ${blackColor};
  }

  .section-subtitle__home {
    font-family: ${subitleFont};
    font-size: 18px;
    font-weight: 300;
    line-height: 1.75em;
  }

  .section-text__home {
    font-family: ${bodyFont};
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 1rem;
    line-height: 1.9em;
  }

  .section-text__home,
  .section-subtitle__home {
    color: ${textColor};
    text-align: left;
    margin-bottom: 1.75rem;
  }

  .section-button-wrapper__home {
    display: flex;
    justify-content: left;
  }

  .section-button__about {
    background-color: ${blackColor};
    color: ${whiteColor};
    border: solid 1px ${blackColor};
    margin-top: 1rem;
    margin-right: 1rem;

    &:hover {
      opacity: 0.8;
    }

    &:focus {
      outline: none;
    }
  }

  .section-work-schedule {
    text-align: center;
    line-height: 1.41em;
    font-size: 22px;
    font-family: ${titleFont};
    font-weight: 300;
    margin: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;

    .section-title__home {
      font-size: 48px;
    }

    .section-subtitle__home {
      font-size: 16px;
    }
  }

  @media (max-width: 320px) {
    padding: 3rem 2rem;

    .section-title__home {
      font-size: 36px;
    }

    .section-subtitle__home {
      font-size: 14px;
    }
  }
`;

export default SectionStyled;
