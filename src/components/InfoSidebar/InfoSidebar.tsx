import Link from "next/link";
import { SectionLink } from "./components";

interface InfoSidebarProps {
  name: string;
  description: string;
  jobTitle: string;
  instHref: string;
  tgHref: string;
  gitHubHref: string;
  linkedInHref: string;
  currentSection: "ABOUT" | "EDUCATION" | "PROJECTS";
}

export const InfoSidebar = ({
  name,
  description,
  jobTitle,
  instHref,
  tgHref,
  gitHubHref,
  linkedInHref,
  currentSection,
}: InfoSidebarProps) => {
  return (
    <aside className="flex flex-col justify-between h-full p-5">
      <div>
        <h1 className="text-3xl font-bold">{name}</h1>
        <h2 className="text-lg">{jobTitle}</h2>
        <p className="text-base font-extralight">{description}</p>
      </div>
      <div className="flex gap-1 flex-col">
        <SectionLink
          sectionName="ABOUT"
          isCurrent={currentSection === "ABOUT"}
        />
        <SectionLink
          sectionName="EDUCATION"
          isCurrent={currentSection === "EDUCATION"}
        />
        <SectionLink
          sectionName="PROJECTS"
          isCurrent={currentSection === "PROJECTS"}
        />
      </div>
      <div>
        <Link href={gitHubHref}>Git</Link>
        <Link href={tgHref}>Rg</Link>
        <Link href={instHref}>Inst</Link>
        <Link href={linkedInHref}>LinkedIn</Link>
      </div>
    </aside>
  );
};
