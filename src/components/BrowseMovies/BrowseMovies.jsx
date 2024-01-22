import React from "react";
import useMoviesData from "../../hooks/useMovieData";
import MoviePoster from "./MoviePoster";
import styles from "./BrowseMovies.module.css";

export default function BrowseMovies() {
  const [moviesData, error, loading] = useMoviesData();
  return (
    <div className={styles.browseMovies}>
      {loading ? (
        <div style={{ color: "#fff" }} className={styles.loading}>
          Loading
        </div>
      ) : !error ? (
        moviesData.map(({ category, movies }) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className={styles.moviesList}>
              {movies?.map((movie) => (
                <MoviePoster
                  posterPath={movie.poster_path}
                  title={movie.title}
                  key={movie.id}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div style={{ color: "#fff" }} className={styles.apiError}>
          Error!
        </div>
      )}
    </div>
  );
}
