import { Education } from "@/components/admin";
import { AdminLayout } from "@/components/Layout";
import Link from "next/link";
import { BiPlus } from "react-icons/bi";

export default function Educations() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-4 gap-6">
        {[...Array(1)].map((_, i) => (
          <Education
            key={i}
            id={(i + 1).toString()}
            name="DNU"
            specialization="Computer engineering"
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
