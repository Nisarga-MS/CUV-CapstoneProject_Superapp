import React from 'react'
import styles from "./MoviePoster.module.css"

export default function MoviePoster({ 
    posterPath="",
    title="Poster Not Present"
}) {
    const  poster = `https://image.tmdb.org/t/p/w500${posterPath}`
   
  return (
    <div className={styles.moviePoster} title={title}>
        {posterPath ? <img src={poster} alt="moviePoster" /> : title}
    </div>
  )
}
