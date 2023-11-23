import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { getMovie } from 'components/Api';
import MovieInfo from "components/MovieDetails/MovieDetails";



const MovieDetails = () => {
    const { movieId } = useParams();

    const [details, setDetails] = useState(null)

    useEffect(() => {
        async function getMovieDetails(id) {
            try {
                const response = await getMovie(movieId);
                const info = {
                    img: response.poster_path ? `https://image.tmdb.org/t/p/w500${response.poster_path}` : 'No poster',
                    title: response.title,
                    year: response.release_date.slice(0, 4),
                    overview: response.overview !== '' ? response.overview : 'There is no overview',
                    genres: response.genres.length > 0 ? response.genres?.map(genre => genre.name).join(', ') : 'No genres',
                    score: response.vote_average,
                };

                setDetails(info)
                return response;
            } catch (error) {
                console.error(error);
            }
        }
        getMovieDetails(movieId)
    }, [movieId])
    return (
        <div>
            <h2>Details</h2>
            {details &&
                <MovieInfo data={details} />
            }
            <hr/>
            <ul>
                <NavLink to={`cast`}>Cast</NavLink>
                <NavLink to={`reviews`}>Reviews</NavLink>
            </ul>
            <Outlet />
        </div>
    )
}

export default MovieDetails;