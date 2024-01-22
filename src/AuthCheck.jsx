import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCheck({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const categories = JSON.parse(localStorage.getItem("genre"));

  const userStatus = userData && Object.keys(userData).length === 5;
  const categoryStatus = categories && categories.length > 2;

  useEffect(() => {
    if (authentication && !userStatus) navigate("/register");
    else if (authentication && userStatus && !categoryStatus)
      navigate("/category");
    else if (!authentication && userStatus)
      categoryStatus ? navigate("/") : navigate("/category");
    setLoader(false);
  }, []);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
