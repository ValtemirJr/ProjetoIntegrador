import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { primaryColor, titleFont } from '../UI/variables';

const ButtonStyled = styled(Link)`
  background-color: #ffffff;
  color: ${primaryColor};
  padding: 12px 15px;
  border: solid 1px ${primaryColor};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 12px;
  font-family: ${titleFont};

  &:hover {
    background-color: ${primaryColor};
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export default ButtonStyled;
