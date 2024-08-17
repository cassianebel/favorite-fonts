import { useState, useEffect } from "react";
import FontDisplay from "./FontDisplay";
import { TbHeartFilled } from "react-icons/tb";
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
    addFont(newFont);
  };

  const removeFont = (fontToRemove) => {
    setFavoriteFonts(favoriteFonts.filter((font) => font !== fontToRemove));
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
      <form
        id="add-font-form"
        onSubmit={handleSubmit}
        className="mx-auto my-4 w-fit rounded-md bg-zinc-500 flex items-center"
      >
        <input
          className="p-2 px-4 m-4 mr-2  rounded-md border-2 border-black "
          type="text"
          value={newFont}
          onChange={(e) => setNewFont(e.target.value)}
          placeholder="Enter font name"
        />
        <button
          className="p-2 px-4 m-4 ml-2 rounded-md bg-black text-white flex items-center gap-3"
          type="submit"
        >
          <TbHeartFilled />
          Add Font
        </button>
      </form>

      <FontDisplay favoriteFonts={favoriteFonts} removeFont={removeFont} />
    </>
  );
};

export default App;
