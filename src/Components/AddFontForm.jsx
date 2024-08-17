import { TbHeartFilled } from "react-icons/tb";

const AddFontForm = ({ handleSubmit, newFont, setNewFont }) => {
  return (
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
        placeholder="Enter a Google Font name"
      />
      <button
        className="p-2 px-4 m-4 ml-2 rounded-md bg-black text-white flex items-center gap-3"
        type="submit"
      >
        <TbHeartFilled />
        Add Font
      </button>
    </form>
  );
};

export default AddFontForm;
