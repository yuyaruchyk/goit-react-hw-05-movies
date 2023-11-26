import React, { useEffect, useState } from 'react';
import { getTrending } from 'components/Api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [moviesList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getPopularFilms() {
      try {
        const popularFilms = await getTrending();
        setMovieList(popularFilms);
      } catch (error) {
        console.error(error);
      }
    }

    getPopularFilms();
  }, []);

  return (
    <ul>
      {moviesList.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
