import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    const getCast = async (id) => {
      try {
        const res = await getMovieCredits(id);
        const castRes = res.cast;
        const info = castRes.map(item => ({
          id: item.id,
          img: item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : 'Unknown',
          name: item.name || 'Unknown',
          char: item.character || 'Unknown',
        }));
        setCastInfo(info);
      } catch (error) {
        console.error(error);
      }
    };

    if (movieId) {
      getCast(movieId);
    }

  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {castInfo && castInfo.length > 0 ? (
        <ul>
          {castInfo.map(item => (
            <div key={item.id}>
              <img src={item.img} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Character: {item.char}</p>
            </div>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default Cast;
