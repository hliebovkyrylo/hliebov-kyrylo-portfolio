import { UpdateInfoForm } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import { api } from "@/lib/api/api";
import { endpoints } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";

export default function UpdateInfo() {
  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: [endpoints.getUser()],
    queryFn: () => api.getUser(),
    select: (data) => data.data.data,
  });

  if (isLoadingUser) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <UpdateInfoForm user={user} />
    </AdminLayout>
  );
}
