import './App.css';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BreedsPage from "./pages/BreedsPage";
import HomePage from "./pages/HomePage";
import ThemeContext from "./ThemeContext";

const App = () => {
  const [themeColor, setThemeColor] = useState("cyan");

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/breeds" element={<BreedsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;

