import { api } from "@/lib/api/api";
import { ErrorResponse } from "@/lib/utils/apiResponse";
import {
  UpdateEducationInput,
  updateEducationSchema,
} from "@/schemas/updateEducationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Education } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const UpdateEducationForm = ({
  education,
}: {
  education?: Education;
}) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, register } = useForm<UpdateEducationInput>({
    defaultValues: {
      name: education?.name || "",
      years: education?.years || "",
      specialization: education?.specialization || "",
      description: education?.description || "",
    },
    resolver: zodResolver(updateEducationSchema),
  });

  const updateEducationMutation = useMutation({
    mutationFn: ({
      educationId,
      data,
    }: {
      educationId: string;
      data: UpdateEducationInput;
    }) => api.updateEducation(educationId, data),
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
    onSuccess: () => {
      router.push("/admin/educations");
    },
  });

  const deleteEducationMutation = useMutation({
    mutationFn: api.deleteEducation,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
    onSuccess: () => {
      router.push("/admin/educations");
    },
  });

  const onSubmit = handleSubmit((data: UpdateEducationInput) => {
    updateEducationMutation.mutate({
      educationId: education?.id as string,
      data,
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-96 w-full gap-3">
      <div>{error}</div>
      <div>
        <label className="font-thin text-xs block">NAME</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name of education..."
          {...register("name")}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">YEARS</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter years..."
          {...register("years")}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">SPECIALIZATION</label>
        <input
          type="text"
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter specialization"
          {...register("specialization")}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">DESCRIPTION</label>
        <textarea
          required
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter description..."
          {...register("description")}
        />
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
        onClick={() => {
          deleteEducationMutation.mutate(education?.id as string);
        }}
      >
        Delete education
      </button>
    </form>
  );
};
