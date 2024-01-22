import React from "react";
import useNewsFacts from "../../hooks/useNewsFacts";
import styles from "./News.module.css";

export default function News({ dateTime }) {
  const [newsData, error, loading] = useNewsFacts();

  return (
    <>
      {loading ? (
        <div className={`${styles.news} ${styles.loading}`}>Loading...</div>
      ) : !error ? (
        <div className={styles.news}>
          <div
            className={styles.newsCover}
            style={{ backgroundImage: `url(${newsData.urlToImage})` }}
          >
            <div>
              <h3>{newsData.title}</h3>
              <p>
                {dateTime.date} | {dateTime.time}
              </p>
            </div>
          </div>
          <div className={styles.newsContent}>
            <p>
              {newsData.content &&
                newsData.content.substring(
                  0,
                  newsData.content.lastIndexOf("[")
                )}
            </p>
            <a href={newsData.url} target="_blank">
              Read More
            </a>
          </div>
        </div>
      ) : (
        <div className={`${styles.news} ${styles.apiError}`}>
          Something went wrong! Please try again after some time
        </div>
      )}
    </>
  );
}
