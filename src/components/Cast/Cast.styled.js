import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledCast = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  > div {
    flex-basis: calc(25% - 10px);
    box-sizing: border-box;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
`;

export const StyledP = styled.p`
  font-size: 15px;
`;
