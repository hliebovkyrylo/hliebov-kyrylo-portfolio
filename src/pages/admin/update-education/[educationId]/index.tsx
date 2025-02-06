import { UpdateEducationForm } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import { Loader } from "@/components/Loader";
import { api } from "@/lib/api/api";
import { endpoints } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

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
