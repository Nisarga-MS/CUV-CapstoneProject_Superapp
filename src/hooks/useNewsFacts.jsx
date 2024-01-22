import { useEffect, useState } from "react";
import axios from "axios";

const reqUrl = `https://newsapi.org/v2/everything?q=tech&from=2024-01-01&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

export default function useNewsFacts() {
  const [newsData, setNewsData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(reqUrl)
      .then((response) => {
        if (response.data && response.data.status === "ok") {
          const randomNews = Math.floor(
            Math.random() * response.data.articles.length
          );
          setNewsData(response.data.articles[randomNews]);
        } else new Promise.reject();
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return [newsData, error, loading];
}
