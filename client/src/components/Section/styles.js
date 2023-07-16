import styled from 'styled-components';
import {
  textColor,
  titleFont,
  subitleFont,
  blackColor,
  bodyFont,
  whiteColor,
} from '../UI/variables';

const SectionStyled = styled.section`
  background-color: ${whiteColor};
  color: ${textColor};
  padding: 7.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section-container,
  .section-work-schedule-container {
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
    text-align: justify;
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
    text-align: center;
    z-index: 1;

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
    margin: 1rem 0;
    z-index: 1;
    color: ${whiteColor};

    h2 {
      font-size: 22px;
      font-weight: 100;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      line-height: 2rem;
    }

    p {
      font-size: 14px;
      font-weight: 100;
      margin-bottom: 0.5rem;
    }
  }

  .section-button__work-schedule {
    background-color: ${blackColor};
    color: ${whiteColor};
    border: solid 1px ${blackColor};
    margin-top: 1rem;
    margin-right: 1rem;
    text-align: center;
    z-index: 1;

    &:hover {
      background: transparent;
      border: solid 1px ${whiteColor};
    }

    &:focus {
      outline: none;
    }
  }

  .section-button-wrapper__work-schedule {
    display: flex;
    justify-content: center;
  }

  .section-work-schedule p:first-of-type {
    margin: 2.5rem;
    font-size: 18px;
  }

  .section-work-schedule p:nth-of-type(5) {
    margin: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 2rem;

    .section-title__home {
      font-size: 36px;
    }

    .section-subtitle__home {
      font-size: 16px;
    }

    .section-text__home {
      font-size: 14px;
    }

    .section-work-schedule {
      font-size: 18px;
    }
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

  @media (max-width: 424px) {
    padding: 3rem 2rem;

    .section-title__home {
      font-size: 40px;
    }

    .section-subtitle__home {
      font-size: 14px;
    }

    .section-text__home {
      font-size: 12px;
    }

    .section-work-schedule {
      font-size: 16px;
    }

    .section-button__about {
      font-size: 10px;
      margin-right: 0.3rem;
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
