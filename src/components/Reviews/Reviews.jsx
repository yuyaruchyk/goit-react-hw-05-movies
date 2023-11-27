import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'Appi/Api';
import { StyledUl, StyledLi, StyledName  } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async (id) => {
      try {
        const response = await getMovieReviews(id);

        const reviewResponse = response.results;

        const info = reviewResponse.map((item) => ({
          id: item.id,
          author: item.author || 'Unknown',
          review: item.content || 'Unknown',
        }));

        setReviews(info);
      } catch (error) {
        console.error(error);
      }
    };

    if (movieId) {
      fetchReviews(movieId);
    }
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <StyledUl>
          {reviews.map((item) => (
            <StyledLi  key={item.id}>
              <StyledName>Name: {item.author}</StyledName>
              <p>Review: {item.review}</p>
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
