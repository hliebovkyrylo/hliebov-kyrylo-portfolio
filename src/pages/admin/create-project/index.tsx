import { CreateProjectForm } from '@/modules/admin';
import { AdminLayout } from '@/modules/layouts';

export default function CreateProject() {
  return (
    <AdminLayout>
      <CreateProjectForm />
    </AdminLayout>
  );
}
