import styled from 'styled-components';
import { primaryColor, whiteColor, whiteGreyColor } from '../../UI/variables';

const SideNav = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  width: 275px;
  z-index: 1;
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
`;

export default SideNav;
