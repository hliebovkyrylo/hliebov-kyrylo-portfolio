import Image from "next/image";
import { Skill } from "./components/Skill";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { Project as ProjectType } from "@prisma/client";

export const Project = ({ project }: { project: ProjectType }) => {
  const skillsArray = project.tags.split(",");

  return (
    <div className="flex w-full gap-3 bg-slate-800 p-3 rounded-xl opacity-30 hover:opacity-100 transition duration-500 ease-in-out max-[390px]:block">
      <Image
        src={project.imageUrl}
        alt={project.name}
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-lg max-[390px]:mb-3"
      />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{project.name}</p>
          <Link href={project.link}>
            <BiLinkExternal />
          </Link>
        </div>
        <p className="my-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {skillsArray.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};
