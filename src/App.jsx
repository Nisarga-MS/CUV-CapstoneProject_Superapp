import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenerePage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/category" element={<GenrePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/browse" element={<MoviesPage />} />
    </Routes>
  );
}

export default App;
