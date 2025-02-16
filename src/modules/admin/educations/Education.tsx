import Link from "next/link";

interface EducationProps {
  id: string;
  name: string;
  specialization: string;
}

export const Education = ({ id, name, specialization }: EducationProps) => {
  return (
    <Link
      href={`/admin/update-education/${id}`}
      className="bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-500 ease-in-out px-3 py-2"
    >
      <p className="text-xl font-bold truncate">{name}</p>
      <p className="truncate">{specialization}</p>
    </Link>
  );
};
