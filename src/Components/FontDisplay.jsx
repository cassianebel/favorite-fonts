import { TbHeartBroken, TbExternalLink } from "react-icons/tb";

import PropTypes from "prop-types";

const FontDisplay = ({ favoriteFonts, removeFont, displayText }) => (
  <div>
    {[...favoriteFonts].reverse().map((font) => (
      <div
        key={font}
        className="m-4 md:m-20 bg-zinc-100 p-10 dark:bg-zinc-800 dark:text-zinc-100"
      >
        <p
          className="my-10 text-5xl text-center"
          style={{ fontFamily: `'${font.replace(/\+/g, " ")}'` }}
        >
          {displayText}
        </p>
        <div className="md:flex justify-center text-center">
          <a
            className="w-fit p-2 px-4 my-4 mx-auto md:m-4 rounded-md border-2 border-spring-green-900 text-spring-green-900 hover:border-spring-green-800 hover:text-spring-green-800 dark:border-spring-green-500 dark:text-spring-green-500 dark:hover:border-spring-green-300 dark:hover:text-spring-green-300 transition-colors flex items-center gap-2"
            href={`https://fonts.google.com/specimen/${font}`}
            target="_blank"
          >
            <TbExternalLink /> Get {font.replace(/\+/g, " ")}
          </a>
          <button
            className="p-2 px-4 my-4 mx-auto md:m-4 rounded-md border-2  border-zinc-600 text-zinc-600 hover:border-zinc-800 hover:text-zinc-800 dark:border-zinc-400 dark:text-zinc-400 hover:dark:border-zinc-300 hover:dark:text-zinc-300 transition-colors flex items-center gap-2"
            onClick={() => removeFont(font)}
          >
            <TbHeartBroken /> Remove {font.replace(/\+/g, " ")}
          </button>
        </div>
      </div>
    ))}
  </div>
);

FontDisplay.propTypes = {
  favoriteFonts: PropTypes.array.isRequired,
  removeFont: PropTypes.func.isRequired,
};

export default FontDisplay;
