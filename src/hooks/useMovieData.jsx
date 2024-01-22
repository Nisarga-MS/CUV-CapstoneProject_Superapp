import axios from "axios";
import { useEffect, useState } from "react";

async function getMoviesData(Id) {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en_US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: `${Id}`,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MOVIES_ACCESS_TOKEN_AUTH}`,
    },
  };
  try {
    return await axios.request(options);
  } catch (error) {
    throw new error();
  }
}

export default function useMoviesData() {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categories = JSON.parse(localStorage.getItem("genre"));
    Promise.all(
      categories.map(async (category) => {
        const response = await getMoviesData(category);
        const random = Math.floor(
          Math.random() * (response.data.results.length - 3)
        );
        const moviesByCategory = response.data.results.slice(
          random,
          random + 7
        );
        return { category: category, movies: moviesByCategory };
      })
    )
      .then((movies) => {
        setMoviesData(movies);
      })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return [moviesData, error, loading];
}
