import { TbHeartFilled } from "react-icons/tb";

const AddFontForm = ({ handleNewFontSubmit, newFont, setNewFont }) => {
  return (
    <form
      id="add-font-form"
      onSubmit={handleNewFontSubmit}
      className="mx-auto my-4 max-w-md rounded-md md:bg-zinc-500 flex items-center"
    >
      <input
        className="p-2 px-4 m-4 mr-2 grow rounded-md border-2 border-black "
        type="text"
        value={newFont}
        onChange={(e) => setNewFont(e.target.value)}
        placeholder="Enter a Google Font name"
      />
      <button
        className="p-2 px-4 m-4 ml-2 rounded-md bg-spring-green-500 text-zinc-900 hover:bg-spring-green-400 transition-colors flex items-center gap-3"
        type="submit"
      >
        <TbHeartFilled />
        Add Font
      </button>
    </form>
  );
};

export default AddFontForm;
