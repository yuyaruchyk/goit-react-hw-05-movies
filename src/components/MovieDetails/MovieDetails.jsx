import { DetailContainer } from "./MovieDetails.styled";

const MovieInfo = ({ data }) => {
  const { img, title, year, score, overview, genres } = data;

  return (
    <div>
      <DetailContainer>
        <img src={img} alt={title} height="500" />
        <div>
          <h2>
            {title}
            <span> ({year})</span>
          </h2>
          <div>User score: {score}</div>
          <h3>Overview</h3>
          <span>{overview}</span>
          <h3>Genres</h3>
          <span>{genres}</span>
        </div>
      </DetailContainer>
    </div>
  );
};

export default MovieInfo;
