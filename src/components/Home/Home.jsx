import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import useDate from "../../hooks/useDate";
import Weather from "../Weather/Weather";

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
  <Weather dateTime={dateTime} />
  </div>
  );
}