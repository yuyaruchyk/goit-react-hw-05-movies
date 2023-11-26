import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async id => {
      try {
        const response = await getMovieReviews(id);
        const reviewResponse = response.cast;
        const info = reviewResponse.map(item => ({
          id: item.id,
          img: item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : 'Unknown',
          name: item.name || 'Unknown',
          char: item.character || 'Unknown',
        }));
        setReviews(info);
      } catch (error) {
        console.error(error);
      }
    };

    if (movieId) {
      getReviews(movieId);
    }
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <div key={item.id}>
              <img src={item.img} alt={item.name} />
              <p>Name: {item.name}</p>
              <p>Character: {item.char}</p>
            </div>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
