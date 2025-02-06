import { Project } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import { Loader } from "@/components/Loader";
import { api } from "@/lib/api/api";
import { endpoints } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Projects() {
  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: [endpoints.getAllProjects()],
    queryFn: () => api.getAllProjects(),
    select: (data) => data.data.data,
  });

  if (isLoadingProjects) return <Loader />;

  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-6">
        {projects?.map((project, i) => (
          <Project
            key={i}
            id={project.id}
            name={project.name}
            imageUrl={project.imageUrl}
          />
        ))}
        <Link
          href={"/admin/create-project"}
          className="bg-slate-800 hover:bg-slate-700 transition duration-500 ease-in-out rounded-xl flex justify-center items-center"
        >
          <BiPlus size={64} />
        </Link>
      </div>
    </AdminLayout>
  );
}
