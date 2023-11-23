import React, { useState, useEffect } from 'react';
import { Searchbar } from 'components/SearchForm/SearchForm';
import MovieItem from 'components/MovieItem/MovieItem';
import { getSearch } from 'components/Api';

const Movies = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);

  useEffect(() => {
    if (searchText === '') {
      return;
    }

    async function getSearchedMovies() {
      try {
        const newQuery = searchText.split('/').pop();
        const response = await getSearch(newQuery);
        const foundMovies = response.results;
        setSearchedMoviesList(foundMovies);
      } catch (error) {
        console.error('Error fetching searched movies:', error);
      }
    }

    getSearchedMovies();
  }, [searchText]);

  const handleSubmit = value => {
    setSearchText(`${Date.now()}/${value}`);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ul>
        {searchedMoviesList.map(movie => (
          <MovieItem key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
