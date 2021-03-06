import { useState, useEffect } from "react";

import useMovieService from "../../service/MovieService";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import GenreList from "../genreList/GenreList";

const GenrePage = () => {
  const [baseURL, setBaseURL] = useState("");

  const { getConfiguration } = useMovieService();

  useEffect(() => {
    getConfiguration().then(({ base_url, poster_sizes }) =>
      setBaseURL(`${base_url}${poster_sizes[5]}`)
    );// eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorBoundary>
        <GenreList baseURL={baseURL} />
      </ErrorBoundary>
    </>
  );
};

export default GenrePage