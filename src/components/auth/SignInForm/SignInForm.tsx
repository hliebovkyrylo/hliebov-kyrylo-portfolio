import Link from "next/link";
import { useForm } from "react-hook-form";
import { SignInFormData, signInSchema } from "./schemas/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/api";
import { useState } from "react";
import { AxiosError } from "axios";
import { ErrorResponse, SuccessResponse } from "@/lib/utils/apiResponse";
import cookie from "js-cookie";
import { useRouter } from "next/router";

export const SignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: SignInFormData) => {
      const response = await api.signIn(data);
      return response.data;
    },
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
    onSuccess: (response: SuccessResponse<string>) => {
      cookie.set("accessToken", response.data);
      router.push("/admin/update-info");
    },
  });

  const onSubmit = handleSubmit((data: SignInFormData) => {
    mutation.mutate(data);
  });

  return (
    <div className="max-w-80 w-full">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 bg-slate-800 p-3 rounded-xl"
      >
        <div>{error}</div>
        <input
          className="px-3 py-2 rounded-lg bg-slate-600"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <input
          className="px-3 py-2 rounded-lg bg-slate-600"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out">
          Sign In
        </button>
      </form>
      <span>If you not admin, please back to</span>
      <Link href={"/"} className="ml-1 hover:underline text-emerald-600">
        home page
      </Link>
    </div>
  );
};
