import { BiImage } from "react-icons/bi";
import { TagsInput } from "../../shared";
import { useSelectImage } from "../../shared/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateProjectInput } from "@/schemas/createProjectSchema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/api";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/lib/utils/apiResponse";
import { convertToBase64 } from "@/lib/utils/covertToBase64";
import { useRouter } from "next/router";

export const CreateProjectForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const { handleFileChange, handleFileInputClick, selectedImage } =
    useSelectImage();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<CreateProjectInput>();

  const uploadImageMutation = useMutation({
    mutationFn: api.uploadImage,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  const createProjectMutation = useMutation({
    mutationFn: api.createProject,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  console.log(errors);
  const onSubmit = handleSubmit(async (data) => {
    if (selectedImage) {
      const base64Image = await convertToBase64(selectedImage);

      const uploadImageResult = await uploadImageMutation.mutateAsync({
        image: base64Image,
      });
      const imageUrl = uploadImageResult.data.data;
      const tagsString = tags.toString();

      setValue("imageUrl", imageUrl);
      setValue("tags", tagsString);

      await createProjectMutation.mutateAsync({
        ...data,
        imageUrl,
        tags: tagsString,
      });

      await router.push("/admin/projects");
    } else {
      setError("Please, select image");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex gap-6">
      <div>{error}</div>
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
            {...register("name")}
          />
        </div>
        <div>
          <label className="font-thin text-xs block">LINK</label>
          <input
            type="url"
            className="px-3 py-2 rounded-lg bg-slate-600 w-full"
            placeholder="Enter link of the project..."
            {...register("link")}
          />
        </div>
        <div>
          <label className="font-thin text-xs block">DESCRIPTION</label>
          <textarea
            className="px-3 py-2 rounded-lg bg-slate-600 w-full min-h-36"
            placeholder="Enter description..."
            {...register("description")}
          />
        </div>
        <div>
          <label className="font-thin text-xs block">TAGS</label>
          <TagsInput tags={tags} setTags={setTags} />
        </div>
        <button className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out">
          Save
        </button>
      </div>
    </form>
  );
};
