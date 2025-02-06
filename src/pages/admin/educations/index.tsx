import { Education } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import { api } from "@/lib/api/api";
import { endpoints } from "@/lib/api/endpoints";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Educations() {
  const { data: educations, isLoading: isEducationsLoading } = useQuery({
    queryKey: [endpoints.getAllEducations],
    queryFn: () => api.getAllEducations(),
    select: (data) => data.data.data,
  });

  if (isEducationsLoading) return <div>Loading...</div>;

  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-6">
        {educations &&
          educations.map((education) => (
            <Education
              key={education.id}
              id={education.id}
              name={education.name}
              specialization={education.specialization}
            />
          ))}
        <Link
          href={"/admin/create-education"}
          className="bg-slate-800 hover:bg-slate-700 transition duration-500 ease-in-out rounded-xl flex justify-center items-center"
        >
          <BiPlus size={32} />
        </Link>
      </div>
    </AdminLayout>
  );
}
