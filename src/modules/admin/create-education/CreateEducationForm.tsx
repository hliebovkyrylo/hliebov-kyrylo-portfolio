import { api } from "@/lib/api/api";
import { ErrorResponse } from "@/lib/utils/apiResponse";
import {
  CreateEducationInput,
  createEducationSchema,
} from "@/schemas/createEducationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const CreateEducationForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, register } = useForm<CreateEducationInput>({
    resolver: zodResolver(createEducationSchema),
  });

  const mutation = useMutation({
    mutationFn: api.createEducation,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
    onSuccess: () => {
      router.push("/admin/educations");
    },
  });

  const onSubmit = handleSubmit((data: CreateEducationInput) => {
    mutation.mutate(data);
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
        Create
      </button>
    </form>
  );
};
