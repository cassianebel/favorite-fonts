import { TbHeartBroken, TbExternalLink } from "react-icons/tb";

import PropTypes from "prop-types";

const FontDisplay = ({ favoriteFonts, removeFont }) => (
  <div>
    {[...favoriteFonts].reverse().map((font) => (
      <div key={font} className="m-20 bg-zinc-100 p-10">
        <p
          className="my-10 text-5xl text-center"
          style={{ fontFamily: `'${font.replace(/\+/g, " ")}'` }}
        >
          The quick brown fox jumps over the lazy dog.
        </p>
        <div className="flex justify-center">
          <a
            className="p-2 px-4 m-4 rounded-md border-2 border-violet-700 text-violet-700 flex items-center gap-2"
            href={`https://fonts.google.com/specimen/${font}`}
            target="_blank"
          >
            <TbExternalLink /> Get {font.replace(/\+/g, " ")}
          </a>
          <button
            className="p-2 px-4 m-4 rounded-md border-2  border-black flex items-center gap-2"
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
