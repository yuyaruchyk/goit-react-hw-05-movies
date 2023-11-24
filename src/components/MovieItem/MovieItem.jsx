import { NavLink } from "react-router-dom";
import { StyledLink } from './MovieItem.styled'; 

const MovieItem = ({ id, title }) => {
    return (
        <li>
            <StyledLink id={id} to={`/movies/${id}`}>
                {title}
            </StyledLink>
        </li>
    );
};

export default MovieItem;