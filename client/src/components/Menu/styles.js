import styled from 'styled-components';

import { blackColor, whiteGreyColor } from '../UI/variables';

const MenuHamburguer = styled.div`
  z-index: 5;

  .icon {
    position: absolute;
    z-index: 4;
    left: 1%;
    width: fit-content;
    height: 44px;
    cursor: pointer;
  }

  .hamburguer {
    top: 50%;
    left: 10%;
    width: 32px;
    height: 4px;
    background-color: ${blackColor};
    position: absolute;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .hamburguer:before {
    top: -12px;
    content: '';
    position: absolute;
    width: 32px;
    height: 4px;
    background-color: ${blackColor};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .hamburguer:after {
    top: 12px;
    content: '';
    position: absolute;
    width: 32px;
    height: 4px;
    background-color: ${blackColor};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .menu__links {
    position: absolute;
    width: 250px;
    height: 102vh;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 10%;
    padding: 60px 15px 0 15px;
    flex-wrap: nowrap;
    font-size: 1.2rem;
    font-weight: 600;
    z-index: 3;
    background: linear-gradient(
      185deg,
      ${whiteGreyColor} 90%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .menu__links--list {
    padding: 0;
    border-bottom: 1px solid #000;
  }

  .menu__links--list__item {
    margin: 2px 10px 20px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 0.85rem;
  }

  .menu__links--list__item:hover {
    font-weight: 700;
  }

  .icon.icon__active .hamburguer {
    background: transparent;
    box-shadow: 0 2px 5px transparent;
  }

  .icon.icon__active .hamburguer:after {
    top: 0;
    transform: rotate(225deg);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .icon.icon__active .hamburguer:before {
    top: 0;
    transform: rotate(135deg);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .menu.menu__open {
    visibility: visible;
    opacity: 1;
    box-shadow: 10px 0 69px 0 rgba(0, 0, 0, 0.59);
    transition:
      visibility 0s,
      opacity 0.5s linear;
  }

  .menu.menu__close {
    visibility: hidden;
    opacity: 0;
    width: 0px;
  }
`;

export default MenuHamburguer;
