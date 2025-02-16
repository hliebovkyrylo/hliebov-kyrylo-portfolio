import { api } from '@/lib/api/api';
import { endpoints } from '@/lib/api/endpoints';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '@/modules/common';
import { AdminLayout } from '@/modules/layouts';
import { UpdateInfoForm } from '@/modules/admin';

export default function UpdateInfo() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [endpoints.getUser()],
    queryFn: () => api.getUser(),
    select: (data) => data.data.data,
  });

  if (isLoadingUser) return <Loader />;

  return (
    <AdminLayout>
      <UpdateInfoForm user={user} />
    </AdminLayout>
  );
}
