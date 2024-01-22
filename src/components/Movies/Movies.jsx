import React from "react";
import BrowseMovies from "../BrowseMovies/BrowseMovies";
import SmallProfil from "../../assets/images/profileSmall.png";
import styles from "./Movies.module.css";

export default function Movies() {
  return (
    <div className={styles.browse}>
      <div className={styles.browseHeader}>
        <div>
          <h3>Super app</h3>
          <div>
            <img src={SmallProfil} alt="smallprofilepick" />
          </div>
        </div>
        <h3>Entertainment according to your choice</h3>
      </div>
      <div className={styles.browseBody}>
        <BrowseMovies />
      </div>
    </div>
  );
}
