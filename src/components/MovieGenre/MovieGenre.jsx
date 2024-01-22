import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png";
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import errorPick from "../../assets/icons/error.png";

import styles from "./MovieGenre.module.css";

const DEFAULT_GENRES = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={action}
        alt="Action genre"
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={drama}
        alt="drama genre"
      />
    ),
  },
  {
    id: "Romance",
    color: "#11B800",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={romance}
        alt="romance genre"
      />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={thriller}
        alt="thriller genre"
      />
    ),
  },
  {
    id: "Westren",
    color: "#912500",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={western}
        alt="western genre"
      />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={horror}
        alt="horror genre"
      />
    ),
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={fantasy}
        alt="fantasy genre"
      />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={music}
        alt="music genre"
      />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img
        style={{ width: "153px", height: "89px" }}
        src={fiction}
        alt="fiction genre"
      />
    ),
  },
];

const Category = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const removeCategory = (value) => {
    const newCategoryList = categories.filter((category) => category !== value);
    setCategories(newCategoryList);
  };

  const handleSubmit = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    }
    localStorage.setItem("genre", JSON.stringify(categories));
    navigate("/");
  };

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super app</p>
        <p className={styles.subHeading}>Choose your entertainment category</p>

        <div style={{ marginTop: "10vh" }}>
          <div className={styles.selectedCategory}>
            {categories.map((category) => (
              <div key={category}>
                {category}
                <span onClick={() => removeCategory(category)}>X</span>
              </div>
            ))}
          </div>

          {lengthError && categories.length < 3 && (
            <p className={styles.error}>
              <img src={errorPick} alt="error" width={25} height={20} />
              &nbsp;&nbsp;Minimum 3 categories required
            </p>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {DEFAULT_GENRES.map((genre, idx) => (
          <BlockCard
            genreDetails={genre}
            idx={idx}
            key={genre.id}
            categoriesList={categories}
            setCategories={setCategories}
            removeCategory={removeCategory}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleSubmit}>
        Next Page
      </button>
    </div>
  );
};

const BlockCard = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const addvalueToCategory = (value) => {
    const existingValue = props.categoriesList.filter(
      (category) => category === value
    );

    if (!existingValue.length) {
      props.setCategories([...props.categoriesList, value]);
    } else {
      const newCategoryList = props.categoriesList.filter(
        (category) => category !== value
      );
      props.setCategories(newCategoryList);
    }
  };

  useEffect(() => {
    const isExist =
      props.categoriesList.includes(props.genreDetails.id) === true;
    setIsSelected(isExist);
  }, [props.categoriesList, props.genreDetails.id]);

  return (
    <div
      onClick={() => {
        addvalueToCategory(props.genreDetails.id);
        setIsSelected(!isSelected);
      }}
      style={{
        background: props.genreDetails["color"],
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border: `${isSelected ? "4px solid green" : "4px solid white"}`,
      }}
      key={props.key}
    >
      <p style={{ fontWeight: "500", fontSize: "24px", marginBottom: "14px" }}>
        {props.genreDetails.id}
      </p>
      {props.genreDetails.image}
    </div>
  );
};

export default Category;
