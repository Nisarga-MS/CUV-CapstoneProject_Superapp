import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import Banner from "../../assets/images/banner.png";
import Button from "../Button/Button";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAgreed: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isAgreed: "",
  });

  const handleChange = (event) => {
    if (errors[event.target.name]) {
      event.target.value.trim().length > 0 &&
        setErrors((prev) => ({ ...prev, [event.target.name]: "" }));
    }
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    let isValid = true;
    event.preventDefault();

    for (let input in formData) {
      if (input !== "isAgreed" && formData[input].trim().length === 0) {
        isValid = false;
        setErrors((prev) => ({ ...prev, [input]: "Field is required" }));
      } else if (
        input === "email" &&
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData[input])
      ) {
        setErrors((prev) => ({ ...prev, [input]: "Invalid Email format" }));
        isValid = false;
      } else if (input === "mobile" && formData[input].length !== 10) {
        setErrors((prev) => ({
          ...prev,
          [input]: "Mobile number must be of 10 digit",
        }));
        isValid = false;
      }
      if (input === "isAgreed" && !formData[input]) {
        isValid = false;
        setErrors((prev) => ({
          ...prev,
          [input]: "Check this box if you want to proceed",
        }));
      }
    }
    if (isValid) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/category");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <div>Discover new things on Superapp </div>
        <img src={Banner} alt="bannerimage" />
      </div>

      <div className={styles.box}>
        <form className={styles.form} /* onSubmit={handleFormSubmit} */>
          <h1>Super app</h1>
          <p>create your new Account</p>

          <br />

          <div className={styles.infoField}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              style={errors.name ? { border: "1px solid #F00" } : null}
              onChange={(event) => handleChange(event)}
            ></input>
            {errors.name && <h5>{errors.name}</h5>}
          </div>

          <br />

          <div className={styles.infoField}>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={formData.username}
              style={errors.username ? { border: "1px solid #F00" } : null}
              onChange={(event) => handleChange(event)}
            ></input>
            {errors.username && <h5>{errors.username}</h5>}
          </div>

          <br />

          <div className={styles.infoField}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              style={errors.email ? { border: "1px solid #F00" } : null}
              onChange={(event) => handleChange(event)}
            ></input>
            {errors.email && <h5>{errors.email}</h5>}
          </div>

          <br />

          <div className={styles.infoField}>
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              style={errors.mobile ? { border: "1px solid #F00" } : null}
              onChange={(event) => handleChange(event)}
            ></input>
            {errors.mobile && <h5>{errors.mobile}</h5>}
          </div>
          <br />

          <div className={styles.checkField}>
            <input
              type="checkbox"
              name="isAgreed"
              value={formData.isAgreed}
              id="check"
              onChange={(event) => {
                setFormData((prev) => ({ ...prev, isAgreed: !prev.isAgreed }));
                errors[event.target.name] &&
                  setErrors((prev) => ({ ...prev, [event.target.name]: "" }));
              }}
            ></input>
            <label htmlFor="check">
              Share my registration data with superapp{" "}
            </label>
          </div>
          {errors.isAgreed && <h5>{errors.isAgreed}</h5>}

          <br />

          <Button onClick={handleSubmit} />

          <div className={styles.footerSec}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span>Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp
              <span> Privacy Policy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
