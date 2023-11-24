import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/Api';
import { StyledImg, StyledCast, StyledP } from './Cast.styled';

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
     
      {castInfo && castInfo.length > 0 ? (
        <StyledCast>
          {castInfo.map(item => (
            <div key={item.id}>
              <StyledImg src={item.img} alt={item.name}
              />
              <StyledP>Name: {item.name}</StyledP>
              <StyledP>Character: {item.char}</StyledP>
            </div>
          ))}
        </StyledCast>
      ) : (
        <p>No cast information available</p>
      )}
    </div>
  );
};

export default Cast;
