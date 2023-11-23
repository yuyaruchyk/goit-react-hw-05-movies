import { getTrending } from 'components/Api';
import { useEffect, useState } from 'react';
import MovieItem from '../components/MovieItem/MovieItem';

const Home = () => {
  const [moviesList, setMovieList] = useState([]);

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
    <div>
     
      <ul>
        {moviesList.map(item => (
          <MovieItem key={item.id} id={item.id} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
