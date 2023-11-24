import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 500;
  font-size: 15px;
  padding: 4px;
  color: black;

  &:hover,
  &:focus {
    color: #404bbf;
  }
`;
