import React, { useState, useEffect } from 'react';
import { Searchbar } from 'components/SearchForm/SearchForm';
import { getSearch } from 'Appi/Api';
import { useSearchParams } from 'react-router-dom';
import FoundFilms from 'components/FoundFilms/FoundFilms'; 

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryNew = searchParams.get('query') ?? '';
  const [searchedMoviesList, setSearchedMoviesList] = useState([]);

  useEffect(() => {
    if (queryNew === '') {
      return;
    }

    async function getSearchedMovies() {
      try {
        const newQuery = queryNew.split('/').pop();
        const response = await getSearch(newQuery);
        const foundMovies = response.results;
        setSearchedMoviesList(foundMovies);
      } catch (error) {
        console.error('Error fetching searched movies:', error);
      }
    }

    getSearchedMovies();
  }, [queryNew]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <FoundFilms movies={searchedMoviesList} />
    </div>
  );
};

export default Movies;
