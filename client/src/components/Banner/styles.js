import styled from 'styled-components';
import {
  primaryColor,
  textColor,
  titleFont,
  subitleFont,
} from '../UI/variables';

const BannerStyled = styled.header`
  background-color: #ffffff;
  color: #000000;
  padding: 7.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .header-title__home {
    font-family: ${titleFont};
    font-size: 72px;
    font-weight: 300;
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: ${primaryColor};
  }

  .header-subtitle__home {
    font-family: ${subitleFont};
    font-size: 18px;
    font-weight: 400;
    color: ${textColor};
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
