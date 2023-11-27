import { useEffect, useState } from 'react';
import { useRef } from "react";
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovie } from 'Appi/Api';
import MovieInfo from 'components/MovieDetails/MovieDetails';

import { StyledNavPages, StyledNavLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

   const location = useLocation();
    const backLink = useRef(location.state?.from ?? "/")

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await getMovie(movieId);
        const info = {
         img: response.poster_path ? `https://image.tmdb.org/t/p/w500${response.poster_path}` : 'No image',
          title: response.title,
          year: response.release_date.slice(0, 4),
          overview:
            response.overview !== ''
              ? response.overview
              : 'There is no overview',
          genres:
            response.genres.length > 0
              ? response.genres?.map(genre => genre.name).join(', ')
              : 'No genres',
          score: response.vote_average,
        };

        setDetails(info);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <div>
     
      {details && <MovieInfo data={details} />}
      <hr />
      <StyledNavPages>
      <StyledNavLink to={backLink.current}>Back to all films</StyledNavLink>
      <StyledNavLink to={`cast`}>Cast</StyledNavLink>         
        <StyledNavLink to={`reviews`}>Reviews</StyledNavLink>
       
      </StyledNavPages>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
