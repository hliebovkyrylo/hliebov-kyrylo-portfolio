import { Project } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";

export default function Projects() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-6">
        {[...Array(13)].map((_, i) => (
          <Project
            id={(i + 1).toString()}
            name="Test project"
            imageUrl="/photo.png"
          />
        ))}
      </div>
    </AdminLayout>
  );
}
