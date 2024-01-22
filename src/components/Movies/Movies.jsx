import React from 'react'
import BrowseMovies from '../BrowseMovies/BrowseMovies';
import SmallProfil from "../../assets/images/profileSmall.png";
import styles from "./Movies.module.css";
import { useNavigate } from 'react-router-dom';


export default function Movies() {

  const navigate = useNavigate();
   const navitageToHome =()=>{
    navigate("/")
   }
  
  return (
    <div className={styles.browse}>
      <div className={styles.browseHeader}>
        <div>
          <h3>Super app</h3>
          <div onClick={navitageToHome}><img src={SmallProfil} alt ="smallprofilepick" /></div>
        </div>
        <h3>Entertainment according to your choice</h3>
      </div>
      <div className={styles.browseBody}>
        <BrowseMovies />
      </div>
    </div>
  )
}
