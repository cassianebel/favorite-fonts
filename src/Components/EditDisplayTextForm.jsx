import { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const EditDisplayTextForm = ({ setDisplayText }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayText(inputValue);
  };

  return (
    <form
      id="edit-display-text-form"
      onSubmit={handleSubmit}
      className="mx-5 lg:mx-40 my-4 pb-2 md:pb-0 rounded-md md:bg-zinc-500 md:flex items-center"
    >
      <input
        className="grow w-11/12 md:w-auto p-2 px-4 m-4 mr-2 rounded-md border-2 border-black"
        type="text"
        placeholder="Enter Text to Display"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="p-2 px-4 my-4 mx-auto mt-0 md:m-4 md:mt-4 md:ml-2 rounded-md bg-black text-white flex items-center gap-3"
        type="submit"
      >
        <MdOutlineEdit />
        Change Display Text
      </button>
    </form>
  );
};

export default EditDisplayTextForm;
