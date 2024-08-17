import { TbHeartBroken, TbExternalLink } from "react-icons/tb";

const FontDisplay = ({ favoriteFonts, removeFont }) => (
  <div>
    {favoriteFonts.map((font) => (
      <div key={font} className="m-20 bg-zinc-100 p-10">
        <p
          className="my-10 text-5xl text-center"
          style={{ fontFamily: `'${font.replace(/\+/g, " ")}'` }}
        >
          The quick brown fox jumps over the lazy dog.
        </p>
        <div className="flex justify-center">
          <a
            className="p-2 px-4 m-4 rounded-md bg-violet-700 text-white flex items-center gap-3"
            href={`https://fonts.google.com/specimen/${font}`}
            target="_blank"
          >
            <TbExternalLink /> get {font.replace(/\+/g, " ")}
          </a>
          <button
            className="p-2 px-4 m-4 rounded-md bg-black text-white flex items-center gap-3"
            onClick={() => removeFont(font)}
          >
            <TbHeartBroken /> remove {font.replace(/\+/g, " ")}
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default FontDisplay;
