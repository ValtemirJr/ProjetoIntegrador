import styled from 'styled-components';
import { primaryColor, whiteColor, whiteGreyColor } from '../../UI/variables';

const SideNav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 275px;
  background-color: ${whiteColor};
  border-right: 1px solid ${whiteGreyColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.2rem;
    font-weight: 300;
  }

  hr {
    border: none;
    border-bottom: 1px solid #e6e6e6;
    margin: 0;
    width: 90%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    padding: 10px 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    svg {
      margin-right: 15px;
      width: 20px;
      height: 20px;
    }

    &:first-child {
      padding-top: 2rem;
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: ${primaryColor};
    }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    height: 100px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    .logo {
      display: none;
    }

    h1 {
      display: none;
    }

    hr {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      align-content: center;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      border-bottom: 3px solid transparent;

      &:first-child {
        padding-top: 0;
      }

      svg {
        margin-right: 0;
        margin-bottom: 5px;
      }

      a {
        font-size: 0.8rem;
      }
    }
  }
`;

export default SideNav;
