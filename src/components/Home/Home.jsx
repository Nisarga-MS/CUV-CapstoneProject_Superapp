import React, { useEffect, useState } from 'react'
import styles from './Home.module.css';
import ProfileCard from '../ProfileCard/ProfileCard'
import Notes from '../Notes/Notes';
import News from '../News/News';
import useDate from '../../hooks/useDate';
import Weather from '../Weather/Weather';
import Timer from '../Timer/Timer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [minutes, setMinutes] = useState( new Date().getMinutes());
  const dateTime =useDate(minutes);
   useEffect(()=>{
       const dateTimer = setInterval(()=>{
        setMinutes(new Date().getMinutes());
       },1000)

       return ()=>{
        clearInterval(dateTimer);
       }
   },[])

   const navigate = useNavigate();
   const navigateToMovies = () =>{
    navigate("/browse")
   }


  return (
    <div className={styles.homeContainer}>
      <main>
      <ProfileCard />
      <Notes />
      <News dateTime={dateTime} />
      <Weather dateTime={dateTime} />
      <Timer /> 
      </main>
      <button className={styles.browseButton} onClick={navigateToMovies}>Browse</button>
    </div>
  )
}
