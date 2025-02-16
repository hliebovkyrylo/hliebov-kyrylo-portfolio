import { api } from '@/lib/api/api';
import { endpoints } from '@/lib/api/endpoints';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Loader } from '@/modules/common';
import { AdminLayout } from '@/modules/layouts';
import { UpdateProjectForm } from '@/modules/admin';

export default function UpdateProject() {
  const { query } = useRouter();
  const projectId = query.projectId as string;

  const { data: project, isLoading: isLoadingProject } = useQuery({
    queryKey: [endpoints.getProjectById(projectId)],
    queryFn: () => api.getProjectById(projectId),
    select: (data) => data.data.data,
  });

  if (isLoadingProject) return <Loader />;

  return (
    <AdminLayout>
      <UpdateProjectForm project={project} />
    </AdminLayout>
  );
}
