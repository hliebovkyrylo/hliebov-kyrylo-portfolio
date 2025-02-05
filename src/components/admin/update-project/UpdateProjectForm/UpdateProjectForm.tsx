import { BiImage } from "react-icons/bi";
import { useSelectImage } from "../../shared/hooks";
import { TagsInput } from "../../shared";
import { useState } from "react";
import { Project } from "@prisma/client";
import { useForm } from "react-hook-form";
import { UpdateProjectInput } from "@/schemas/updateProjectSchema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/api";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/lib/utils/apiResponse";
import { getPhotoPublicId } from "@/lib/utils/getPhotoPublicId";
import { useRouter } from "next/router";
import { convertToBase64 } from "@/lib/utils/covertToBase64";

export const UpdateProjectForm = ({ project }: { project?: Project }) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>(project?.tags.split(",") || []);
  const {
    handleFileChange,
    handleFileInputClick,
    selectedImage,
    setSelectedImage,
  } = useSelectImage();

  const { handleSubmit, register, setValue } = useForm<UpdateProjectInput>({
    defaultValues: {
      name: project?.name || "",
      link: project?.link || "",
      description: project?.description || "",
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({
      projectId,
      data,
    }: {
      projectId: string;
      data: UpdateProjectInput;
    }) => api.updateProject(projectId, data),
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: api.deleteProject,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: api.uploadImage,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  const deleteImageMutation = useMutation({
    mutationFn: api.deleteImage,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!selectedImage && !project?.imageUrl) {
      setError("Please, select an image");
      return;
    }

    let imageUrl = project?.imageUrl;

    if (selectedImage) {
      const base64Image = await convertToBase64(selectedImage);

      const uploadImageResult = await uploadImageMutation.mutateAsync({
        image: base64Image,
      });
      imageUrl = uploadImageResult.data.data;
      setValue("imageUrl", imageUrl);
    }

    const tagsString = tags.toString();
    setValue("tags", tagsString);

    await updateProjectMutation.mutateAsync({
      projectId: project?.id as string,
      data: {
        ...data,
        imageUrl,
        tags: tagsString,
      },
    });

    await router.push("/admin/projects");
  });

  const handleDeleteImage = async (imageUrl: string) => {
    const publicId = getPhotoPublicId(imageUrl);
    await deleteImageMutation.mutateAsync(publicId);
  };

  const handleDeleteProject = () => {
    deleteProjectMutation.mutate(project?.id as string);
    router.push("/admin/project");
  };

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
        {selectedImage || project?.imageUrl ? (
          <div className="h-full">
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : project?.imageUrl
              }
              alt="Selected"
              className="h-full w-full object-cover rounded-xl mb-3"
            />
            <button
              onClick={(event) => {
                event.stopPropagation();
                selectedImage
                  ? setSelectedImage(null)
                  : project?.imageUrl
                  ? handleDeleteImage(project?.imageUrl as string)
                  : null;
              }}
              className="px-3 py-2 bg-slate-600 w-full rounded-lg hover:bg-slate-500 transition-colors"
              type="button"
            >
              Delete Image
            </button>
          </div>
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
        <button
          type="submit"
          className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out"
        >
          Save
        </button>
        <button
          type="button"
          className="h-11 bg-transparent border-red-700 border-[1px] hover:bg-red-700 rounded-lg transition duration-300 ease-in-out"
          onClick={handleDeleteProject}
        >
          Delete project
        </button>
      </div>
    </form>
  );
};
