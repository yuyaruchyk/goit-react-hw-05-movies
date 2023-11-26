import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavPages = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 15px;
  padding: 4px;
  color: black;

  &:hover,
  &:focus {
    color: #404bbf;
  }
`;
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-weight: 500;
  font-size: 25px;
  padding: 4px;
  color: black;

  &:hover,
  &:focus {
    color: #404bbf;
  }
`;
