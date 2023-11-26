
import React from 'react';
import { StyledNav, StyledHeader, StyledNavLink  } from './Header.styled';


const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNav>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </StyledNav>
      </nav>
    </StyledHeader>
  );
};

export default Header;