export const CreateEducationForm = () => {
  return (
    <form className="flex flex-col max-w-96 w-full gap-3">
      <div>
        <label className="font-thin text-xs block">NAME</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name of education..."
        />
      </div>
      <div>
        <label className="font-thin text-xs block">YEARS</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter years..."
        />
      </div>
      <div>
        <label className="font-thin text-xs block">SPECIALIZATION</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter specialization"
        />
      </div>
      <div>
        <label className="font-thin text-xs block">DESCRIPTION</label>
        <textarea
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter description..."
        />
      </div>
      <button
        type="submit"
        className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out"
      >
        Create
      </button>
    </form>
  );
};
