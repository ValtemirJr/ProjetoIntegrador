import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { titleFont } from '../UI/variables';

const ButtonStyled = styled(Link)`
  padding: 12px 15px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 12px;
  font-family: ${titleFont};
`;

export default ButtonStyled;
