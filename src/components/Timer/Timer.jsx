import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Timer.module.css";
import UpArrow from "../../assets/icons/up.png";
import DownArrow from "../../assets/icons/down.png";
import ClockDone from "../../assets/sound/ClockDone.mp3";

const timerHands = [
  { hand: "Hours" },
  { hand: "Minutes" },
  { hand: "Seconds" },
];

export default function Timer() {
  const [startTimer, setStartTimer] = useState(false);
  const [countdownTime, setCountdownTime] = useState({
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });
  const [timerKey, setTimerKey] = useState(0);

  const renderTime = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleDecreaseTime = (hand) => {
    if (countdownTime[hand] === 0) {
      (hand === "Minutes" || hand === "Seconds") &&
        setCountdownTime((prev) => ({ ...prev, [hand]: 59 }));
      return;
    }
    setCountdownTime((prev) => ({ ...prev, [hand]: prev[hand] - 1 }));
  };

  const handleIncreaseTime = (hand) => {
    if (countdownTime[hand] === 59 && hand !== "Hours") {
      setCountdownTime((prev) => ({ ...prev, [hand]: 0 }));
      hand === "Minutes"
        ? handleDecreaseTime("Hours")
        : handleIncreaseTime("Minutes");
      return;
    }
    setCountdownTime((prev) => ({ ...prev, [hand]: prev[hand] + 1 }));
  };

  const handleToggleTimmer = () => {
    if (
      countdownTime["Hours"] === 0 &&
      countdownTime["Minutes"] === 0 &&
      countdownTime["Seconds"] === 0
    )
      return;
    startTimer ? onTimerComplete() : setStartTimer(true);
  };

  const onTimerComplete = () => {
    setCountdownTime({ Hours: 0, Minutes: 0, Seconds: 0 });
    setStartTimer(false);
    setTimerKey((prev) => prev + 1);
    const audio = new Audio(ClockDone);
    audio.play();
  };
  return (
    <div className={styles.timer}>
      <div className={styles.countdownCircle}>
        <CountdownCircleTimer
          key={timerKey}
          isPlaying={startTimer}
          duration={
            countdownTime["Hours"] * 3600 +
            countdownTime["Minutes"] * 60 +
            countdownTime["Seconds"]
          }
          colors={"#FF6A6A"}
          rotation="counterclockwise"
          strokeWidth={6}
          trailColor="transparent"
          onComplete={onTimerComplete}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div className={styles.countdownSetter}>
        <div className={styles.timerHands}>
          {timerHands.map(({ hand }) => (
            <div key={hand}>
              <p>{hand}</p>
              <div
                className={styles.arrow}
                onClick={() => handleDecreaseTime(hand)}
              >
                <img src={UpArrow} alt="upArrow" />
              </div>
              <h3>
                {countdownTime[hand] < 10 ? "0" : ""}
                {countdownTime[hand]}
              </h3>
              {hand !== "Seconds" && <span>:</span>}
              <div
                className={styles.arrow}
                onClick={() => handleIncreaseTime(hand)}
              >
                {" "}
                <img src={DownArrow} alt="DownArrow" />
              </div>
            </div>
          ))}
        </div>
        <button className={styles.timerToggle} onClick={handleToggleTimmer}>
          {startTimer ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
}
