export const UpdateInfoForm = () => {
  return (
    <form className="flex flex-col max-w-96 w-full gap-3">
      <div>
        <label className="font-thin text-xs block">NAME</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name..."
        />
      </div>
      <div>
        <label className="font-thin text-xs block">POSITION</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name..."
        />
      </div>
      <div>
        <label className="font-thin text-xs block">SMALL DESCRIPTION</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name..."
        />
      </div>
      <div>
        <label className="font-thin text-xs block">DESCRIPTION</label>
        <textarea
          className="px-3 py-2 rounded-lg bg-slate-600 w-full min-h-36"
          placeholder="Enter name..."
        />
      </div>
      <button className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out">
        Save
      </button>
    </form>
  );
};
