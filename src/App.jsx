import { useState, useEffect } from "react";
import AddFontForm from "./Components/AddFontForm";
import EditDisplayTextForm from "./Components/EditDisplayTextForm";
import FontDisplay from "./Components/FontDisplay";
import { GoMoon, GoSun } from "react-icons/go";
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

// Load theme from localStorage
const loadThemeFromLocalStorage = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme ? storedTheme : "dark";
};

const App = () => {
  const [theme, setTheme] = useState(loadThemeFromLocalStorage);
  const [favoriteFonts, setFavoriteFonts] = useState(loadFontsFromLocalStorage);
  const [newFont, setNewFont] = useState("");
  const [displayText, setDisplayText] = useState(
    "The quick brown fox jumps over the lazy dog."
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const addFont = (newFont) => {
    if (newFont && !favoriteFonts.includes(newFont)) {
      setFavoriteFonts([...favoriteFonts, newFont]);
      setNewFont(""); // Clear the input field
    }
  };

  const handleNewFontSubmit = (e) => {
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
    <div className={theme}>
      <div className="dark:bg-zinc-900 pt-4 pb-20 min-h-screen">
        <button
          className="fixed top-4 right-4 p-3  rounded-full bg-spring-green-500 text-zinc-900 hover:bg-spring-green-400 transition-colors"
          onClick={toggleTheme}
        >
          {theme === "light" ? <GoMoon /> : <GoSun />}
        </button>

        <AddFontForm
          handleNewFontSubmit={handleNewFontSubmit}
          newFont={newFont}
          setNewFont={setNewFont}
        />

        <EditDisplayTextForm
          displayText={displayText}
          setDisplayText={setDisplayText}
        />

        <FontDisplay
          favoriteFonts={favoriteFonts}
          removeFont={removeFont}
          displayText={displayText}
        />
      </div>
    </div>
  );
};

export default App;
