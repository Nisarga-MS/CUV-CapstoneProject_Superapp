import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import useDate from "../../hooks/useDate";
import News from "../News/News";


export default function Home() {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const dateTime = useDate(minutes);
  useEffect(() => {
    const dateTimer = setInterval(() => {
      setMinutes(new Date().getMinutes());
    }, 1000);

    return () => {
      clearInterval(dateTimer);
    };
  }, []);
  return (
  <div>
  <News dateTime={dateTime} />
  </div>
  );
}
