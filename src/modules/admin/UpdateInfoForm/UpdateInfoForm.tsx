import { api } from '@/lib/api/api';
import { GetUserResult } from '@/lib/services/userService';
import { ErrorResponse } from '@/lib/utils/apiResponse';
import { UpdateUserInput, updateUserSchema } from '@/schemas/updateUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const UpdateInfoForm = ({ user }: { user?: GetUserResult }) => {
  const [buttonText, setButtonText] = useState('Save');
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, register } = useForm<UpdateUserInput>({
    defaultValues: {
      name: user?.name || '',
      position: user?.position || '',
      smallDescription: user?.smallDescription || '',
      description: user?.description || '',
    },
    resolver: zodResolver(updateUserSchema),
  });

  const mutation = useMutation({
    mutationFn: api.updateUser,
    onError: (response: AxiosError<ErrorResponse>) => {
      setError(response.response?.data.error_message || null);
    },
    onSuccess: () => {
      setButtonText('Saved');
      setTimeout(() => {
        setButtonText('Save');
      }, 2000);
    },
  });

  const onSubmit = handleSubmit((data: UpdateUserInput) => {
    mutation.mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-96 w-full gap-3">
      <div>{error}</div>
      <div>
        <label className="font-thin text-xs block">NAME</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter name..."
          {...register('name')}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">POSITION</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter position..."
          {...register('position')}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">SMALL DESCRIPTION</label>
        <input
          type="text"
          className="px-3 py-2 rounded-lg bg-slate-600 w-full"
          placeholder="Enter small description..."
          {...register('smallDescription')}
        />
      </div>
      <div>
        <label className="font-thin text-xs block">DESCRIPTION</label>
        <textarea
          className="px-3 py-2 rounded-lg bg-slate-600 w-full min-h-36"
          placeholder="Enter description..."
          {...register('description')}
        />
      </div>
      <button className="h-11 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition duration-300 ease-in-out">
        {buttonText}
      </button>
    </form>
  );
};
