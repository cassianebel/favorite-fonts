import { useState, useEffect } from "react";
import AddFontForm from "./Components/AddFontForm";
import FontDisplay from "./Components/FontDisplay";
import "./App.css";

// Save fonts to localStorage
const saveFontsToLocalStorage = (fonts) => {
  localStorage.setItem("favoriteFonts", JSON.stringify(fonts));
};

// Load fonts from localStorage
const loadFontsFromLocalStorage = () => {
  const storedFonts = localStorage.getItem("favoriteFonts");
  return storedFonts ? JSON.parse(storedFonts) : [];
};

const App = () => {
  const [favoriteFonts, setFavoriteFonts] = useState(loadFontsFromLocalStorage);
  const [newFont, setNewFont] = useState("");

  const addFont = (newFont) => {
    if (newFont && !favoriteFonts.includes(newFont)) {
      setFavoriteFonts([...favoriteFonts, newFont]);
      setNewFont(""); // Clear the input field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFont(capitalizeWords(newFont));
  };

  const removeFont = (fontToRemove) => {
    setFavoriteFonts(favoriteFonts.filter((font) => font !== fontToRemove));
  };

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  useEffect(() => {
    saveFontsToLocalStorage(favoriteFonts);
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css?family=${favoriteFonts
      .join("|")
      .replace(/\s+/g, "+")}`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [favoriteFonts]);

  return (
    <>
      <AddFontForm
        handleSubmit={handleSubmit}
        newFont={newFont}
        setNewFont={setNewFont}
      />

      <FontDisplay favoriteFonts={favoriteFonts} removeFont={removeFont} />
    </>
  );
};

export default App;
