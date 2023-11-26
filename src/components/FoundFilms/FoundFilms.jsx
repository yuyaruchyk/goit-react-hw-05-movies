import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './FoundFilms.styled';

const FoundFilms = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default FoundFilms;
