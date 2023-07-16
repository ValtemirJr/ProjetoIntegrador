import styled from 'styled-components';
import {
  primaryColor,
  backgroundColor,
  textColor,
  iconColor,
  titleFont,
  subitleFont,
} from '../UI/variables';

const NavBar = styled.nav`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 2rem 5rem 0;

  .nav__header {
    display: grid;
    grid-template-columns: 1fr 25fr 3.45fr;
    grid-template-rows: 1fr;
    align-items: center;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #000;
  }

  .nav__header--button {
    display: flex;
    justify-self: flex-end;
    background-color: #ffffff;
    color: ${primaryColor};
    border: solid 1px ${primaryColor};

    &:hover {
      background-color: ${primaryColor};
      color: #ffffff;
    }

    &:focus {
      outline: none;
    }
  }

  .div__menu--mobile {
    display: none;
  }

  .nav__header--content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .nav__header--title {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }

  .nav__header--title h1 {
    font-family: ${titleFont};
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .nav__header--title p {
    font-family: ${subitleFont};
    font-size: 0.8rem;
    font-weight: 400;
  }

  .nav__header--line {
    width: 75%;
    justify-self: center;
  }

  .nav__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav__links,
  .nav__social {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }

  .nav__links--list,
  .nav__social--list {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav__social--list a > svg {
    margin: 0 0.5rem;
  }

  .nav__social--list a {
    color: ${iconColor};
  }

  .nav__social--icon {
    font-size: 18px;
  }

  @media screen and (max-width: 1460px) {
    .nav__header {
      grid-template-columns: 1fr 20fr 3.45fr;
    }
  }

  @media screen and (max-width: 1240px) {
    .nav__header {
      grid-template-columns: 1fr 15fr 3.45fr;
    }
  }

  @media screen and (max-width: 1020px) {
    .nav__header {
      grid-template-columns: 1fr 10fr 3.45fr;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 0;
  }

  @media screen and (max-width: 738px) {
    .nav__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: none;
    }

    .nav__header--button {
      display: none;
    }

    .div__menu--mobile {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
    }

    .nav__header--title {
      text-align: center;
      margin: 0;
    }

    .nav__content {
      display: none;
    }

    .nav__social--list {
      margin-top: 1rem;
    }

    .nav__social--list a {
      margin: 0.5rem;
    }
  }

  @media screen and (max-width: 320px) {
    .nav__header--title h1 {
      font-size: 1.25rem;
    }

    .nav__header--title p {
      font-size: 0.75rem;
    }
  }
`;

export default NavBar;