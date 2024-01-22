import { Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import GenrePage from "./pages/GenerePage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/category" element={<GenrePage />} />
    </Routes>
  );
}

export default App;
