import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Project = ({ id, name, imageUrl }: ProjectProps) => {
  return (
    <Link
      href={`/admin/update-project/${id}`}
      className="bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-500 ease-in-out"
    >
      <Image
        src={imageUrl}
        alt="project"
        width={200}
        height={100}
        className="w-full h-52 object-cover"
      />
      <p className="py-3 px-2 truncates">{name}</p>
    </Link>
  );
};
