
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";

const Layout = lazy(() => import("../pages/Layout/Layout"));
const Home = lazy(() => import("pages/Home/Home"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const Cast = lazy(() => import("components/Cast/Cast"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));

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
