import { GlobalStyle } from 'GlobalStyle';
import { Route, Routes, Navigate } from "react-router-dom";


import Layout from '../pages/Layout';
import Home from 'pages/Home';
import NotFoundPage from 'pages/NotFoundPage';
import Movies from 'pages/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails';



export const App = () => {
  return (
    <main>
      
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      
    </main>
  );
};
