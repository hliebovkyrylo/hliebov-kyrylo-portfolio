import { useState } from "react";
import { BiX } from "react-icons/bi";

interface TagsInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

export const TagsInput = ({ tags, setTags }: TagsInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue.trim() && tags.length > 0) {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
  };

  return (
    <div className="bg-slate-600 flex flex-wrap gap-2 px-3 py-2 rounded-lg">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="flex items-center gap-2 bg-slate-500 px-2 rounded-md"
        >
          {tag}
          <button type="button" onClick={() => handleRemoveTag(tag)}>
            <BiX />
          </button>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="bg-transparent outline-none text-white"
        placeholder="Add a tag"
        onKeyDown={handleAddTag}
      />
    </div>
  );
};
