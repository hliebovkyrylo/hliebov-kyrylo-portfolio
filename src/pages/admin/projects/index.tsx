import { Project } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Projects() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-6">
        {[...Array(13)].map((_, i) => (
          <Project
            key={i}
            id={(i + 1).toString()}
            name="Test project"
            imageUrl="/photo.png"
          />
        ))}
        <Link href={"/admin/create-project"} className="bg-slate-800 hover:bg-slate-700 transition duration-500 ease-in-out rounded-xl flex justify-center items-center">
          <BiPlus size={64} />
        </Link>
      </div>
    </AdminLayout>
  );
}
