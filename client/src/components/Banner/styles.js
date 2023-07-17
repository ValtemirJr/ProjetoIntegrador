import styled from 'styled-components';
import {
  primaryColor,
  textColor,
  titleFont,
  subitleFont,
  blackColor,
  whiteColor,
} from '../UI/variables';

const BannerStyled = styled.header`
  background-color: #ffffff;
  color: #000000;
  padding: 6rem 5rem 7.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .header-title__home {
    font-size: 72px;
    color: ${primaryColor};
  }

  .header-title__about {
    line-height: 1.35em;
    font-size: 40px;
    color: ${whiteColor};
    z-index: 1;
  }

  .header-title__about,
  .header-title__home {
    font-family: ${titleFont};
    font-weight: 300;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .header-subtitle__home {
    font-family: ${subitleFont};
    font-size: 18px;
    font-weight: 400;
    color: ${textColor};
  }

  .banner-button {
    background-color: transparent;
    color: ${whiteColor};
    border: solid 1px ${whiteColor};
    margin-top: 1rem;
    margin-right: 1rem;
    text-align: center;
    z-index: 1;

    &:hover {
      border: solid 1px ${blackColor};
      background-color: ${blackColor};
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 2rem;

    .header-title__home {
      font-size: 48px;
    }

    .header-subtitle__home {
      font-size: 16px;
    }
  }

  @media (max-width: 320px) {
    padding: 3rem 2rem;

    .header-title__home {
      font-size: 36px;
    }

    .header-subtitle__home {
      font-size: 14px;
    }
  }
`;

export default BannerStyled;
