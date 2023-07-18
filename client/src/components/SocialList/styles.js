import styled from 'styled-components';

const SocialListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  list-style: none;

  .social-icon {
    font-size: 1.15rem;
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

export default SocialListStyled;
