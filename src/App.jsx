import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenerePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/category" element={<GenrePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
