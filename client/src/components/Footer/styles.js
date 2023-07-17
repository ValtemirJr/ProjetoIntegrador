import styled from 'styled-components';
import {
  blackColor,
  bodyFont,
  secondaryColor,
  titleFont,
  whiteColor,
} from '../UI/variables';

const FooterWrapper = styled.footer`
  background-color: ${secondaryColor};
  color: ${whiteColor};
  padding-top: 2.5rem;
  text-align: center;

  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .footer-container > h2 {
    font-size: 1.5rem;
    font-family: ${titleFont};
    font-weight: 200;
    margin-bottom: 2rem;
  }

  .footer-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    font-family: ${bodyFont};
  }

  .footer-contact,
  .footer-address {
    font-size: 14px;
  }

  .footer-contact > a:hover,
  .footer-address:hover {
    text-decoration: underline;
  }

  .social-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    list-style: none;
  }

  .social-icon {
    font-size: 1.15rem;
  }

  .footer-credits {
    font-family: ${bodyFont};
    font-size: 12px;
    margin-top: 4rem;
    color: ${blackColor};
    background-color: ${whiteColor};
    width: 100%;
    padding-top: 1rem;
  }

  .footer-credits > p {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 863px) {
    .footer-container > h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .footer-info {
      flex-direction: column;
      gap: 1rem;
    }

    .social-icon {
      font-size: 1.35rem;
    }

    .footer-credits {
      margin-top: 2rem;
    }

    .footer-address {
      padding: 0 3rem;
    }
  }
`;

export default FooterWrapper;
