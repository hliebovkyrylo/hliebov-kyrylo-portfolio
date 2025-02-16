import { api } from '@/lib/api/api';
import { endpoints } from '@/lib/api/endpoints';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Loader } from '@/modules/common';
import { AdminLayout } from '@/modules/layouts';
import { UpdateEducationForm } from '@/modules/admin';

const UpdateEducation = () => {
  const { query } = useRouter();
  const educationId = query.educationId as string;

  const { data: education, isLoading: isEducationLoading } = useQuery({
    queryKey: [endpoints.getEducationById],
    queryFn: () => api.getEducationById(educationId),
    select: (data) => data.data.data,
  });

  if (isEducationLoading) return <Loader />;

  return (
    <AdminLayout>
      <UpdateEducationForm education={education} />
    </AdminLayout>
  );
};

export default UpdateEducation;
