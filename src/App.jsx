import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenrePage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import AuthCheck from "./AuthCheck";

function App() {
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <AuthCheck authentication={false}>
            {" "}
            <RegisterPage />
          </AuthCheck>
        }
      />
      <Route
        path="/category"
        element={
          <AuthCheck authentication>
            {" "}
            <GenrePage />
          </AuthCheck>
        }
      />
      <Route
        path="/"
        element={
          <AuthCheck authentication>
            {" "}
            <HomePage />
          </AuthCheck>
        }
      />
      <Route
        path="/browse"
        element={
          <AuthCheck authentication>
            {" "}
            <MoviesPage />
          </AuthCheck>
        }
      />
    </Routes>
  );
}

export default App;
