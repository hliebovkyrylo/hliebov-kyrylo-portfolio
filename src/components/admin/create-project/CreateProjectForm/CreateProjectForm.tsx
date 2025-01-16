import { useState } from "react";
import { BiImage } from "react-icons/bi";
import { TagsInput } from "./components";

export const CreateProjectForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const handleFileInputClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) fileInput.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
  };

  return (
    <form className="flex gap-6">
      <input
        type="file"
        id="file-input"
        onChange={handleFileChange}
        accept="image/*"
        hidden
      />
      <button
        type="button"
        onClick={handleFileInputClick}
        className="flex justify-center items-center bg-slate-600 hover:bg-slate-500 h-96 w-96 rounded-xl transition duration-300 ease-in-out"
      >
        {selectedImage ? (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            className="h-full w-full object-cover rounded-xl"
          />
        ) : (
          <BiImage size={48} />
        )}
      </button>
      <div className="flex flex-col max-w-96 w-full gap-3">
        <div>
          <label className="font-thin text-xs block">NAME</label>
          <input
            type="text"
            className="px-3 py-2 rounded-lg bg-slate-600 w-full"
            placeholder="Enter name of project..."
          />
        </div>
        <div>
          <label className="font-thin text-xs block">LINK</label>
          <input
            type="url"
            className="px-3 py-2 rounded-lg bg-slate-600 w-full"
            placeholder="Enter link of the project..."
          />
        </div>
        <div>
          <label className="font-thin text-xs block">DESCRIPTION</label>
          <textarea
            className="px-3 py-2 rounded-lg bg-slate-600 w-full min-h-36"
            placeholder="Enter description..."
          />
        </div>
        <div>
          <label className="font-thin text-xs block">TAGS</label>
          <TagsInput tags={tags} setTags={setTags} />
        </div>
        <button
          type="button"
          className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
};
