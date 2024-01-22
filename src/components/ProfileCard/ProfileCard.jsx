import React from "react";
import ProfileBig from "../../assets/images/profileBig.png";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  let userDetails = localStorage.getItem("userData");
  if (userDetails) {
    userDetails = JSON.parse(userDetails);
  }

  let categories = localStorage.getItem("genre");
  if (categories) {
    categories = JSON.parse(categories);
  }

  return (
    <div className={styles.profileCard}>
      <img src={ProfileBig} alt="profilePick" />
      <div className={styles.profileData}>
        <p>{userDetails.name}</p>
        <p>{userDetails.email}</p>
        <p>{userDetails.username}</p>
        <div className={styles.categories}>
          {categories.map((category) => (
            <div key={category}>{category}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
